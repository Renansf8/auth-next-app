import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { AuthProvider } from "@/contexts/AuthContext";

export default async function PrivatePagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = await auth();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <AuthProvider user={user}>
      <div className="flex flex-1 flex-col">{children}</div>
    </AuthProvider>
  );
}
