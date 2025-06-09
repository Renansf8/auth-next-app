import { prismaClient } from "@/lib/prismaClient";
import { NextResponse, NextRequest } from "next/server";
import { z } from "zod";
import { hash } from "bcryptjs";

const schema = z.object({
  firstName: z.string().min(1, { message: "Invalid first name" }),
  lastName: z.string().min(1, { message: "Invalid last name" }),
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

  const { firstName, lastName, email, password } = data;

  const emailExists = await prismaClient.user.findUnique({
    where: { email },
    select: { id: true },
  });

  if (emailExists) {
    return NextResponse.json(
      { error: "Email already exists" },
      { status: 409 }
    );
  }

  const hashedPassword = await hash(password, 12);

  await prismaClient.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });

  return new NextResponse(null, { status: 204 });
}
