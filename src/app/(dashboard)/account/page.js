import { auth } from "@/app/_lib/auth";

export default async function Page() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0] || "User";
  return <span className="text-accent-600">Welcome {firstName} </span>;
}
