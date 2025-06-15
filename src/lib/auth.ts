import { env } from "@/config/env";
import { JwtPayload, verify } from "jsonwebtoken";
import { cookies } from "next/headers";
import { prismaClient } from "./prismaClient";
import { User } from "@prisma/client";

export async function getAccessToken() {
  return (await cookies()).get("accessToken")?.value;
}

export async function auth(): Promise<User | null> {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    return null;
  }

  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const { sub: userId } = verify(accessToken, env.jwtSecret) as JwtPayload;

    if (!userId) {
      return null;
    }

    const user = await prismaClient.user.findUnique({
      where: { id: userId },
    });

    return user;
  } catch {
    return null;
  }
}
