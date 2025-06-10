import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await auth();

  if (!user) {
    redirect("/sign-in");
  }

  return <div className="min-h-screen grid place-items-center">{children}</div>;
}
