import { auth } from "@/app/_lib/auth";
import Link from "next/link";

export default async function Page() {
  const session = await auth();

  const firstName = session?.user?.name?.split(" ")[0];

  return (
    <span className="text-accent-600 text-2xl">
      {firstName ? (
        `Welcome ${firstName}, explore available cabins`
      ) : (
        <>
          <Link
            href="/login"
            className="link font-bold  text-primary-700 hover:text-primary-50 "
          >
            Login
          </Link>{" "}
          to see your account details
        </>
      )}
    </span>
  );
}
