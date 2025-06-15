import { getAccessToken } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function PublicPagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const accessToken = await getAccessToken();

  if (accessToken) {
    redirect("/");
  }

  return children;
}
