import { prismaClient } from "@/lib/prismaClient";
import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { env } from "@/config/env";

const schema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { success, data, error } = schema.safeParse(body);

  if (!success) {
    return NextResponse.json({ errors: error.issues }, { status: 400 });
  }

  const { email, password } = data;

  const user = await prismaClient.user.findUnique({
    where: { email },
    select: { id: true, email: true, password: true },
  });

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const isPasswordValid = await compare(password, user.password);

  if (!isPasswordValid) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const accessToken = sign({ sub: user.id }, env.jwtSecret, {
    expiresIn: "7d",
  });

  const response = new NextResponse(null, { status: 200 });

  response.cookies.set("accessToken", accessToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 7, // 7 days,
    path: "/",
    sameSite: "strict",
    secure: true,
  });

  return response;
}
