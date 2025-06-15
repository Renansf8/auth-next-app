import { NextRequest, NextResponse } from "next/server";
import { auth } from "./auth";
import { User } from "@prisma/client";

interface NextResponseWithUser extends NextRequest {
  user: User;
}

export function withAuth(
  handler: (req: NextResponseWithUser) => Promise<unknown>
) {
  return async (req: NextRequest) => {
    const user = await auth();

    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const requestWithUser = req as NextResponseWithUser;
    requestWithUser.user = user;

    return handler(requestWithUser);
  };
}
