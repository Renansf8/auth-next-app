import { getAccessToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const accessToken = await getAccessToken();

  if (!accessToken) {
    redirect("/sign-in");
  }

  return <div className="min-h-screen grid place-items-center">{children}</div>;
}
