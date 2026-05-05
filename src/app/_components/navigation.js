import Link from "next/link";
import { auth } from "../_lib/auth";
import ShowUserDetails from "./showUserDetails";
import Image from "next/image";
import UserProfile from "./UserProfile";

export default async function Navigation() {
  const session = await auth();
  // md:pl-100
  return (
    <nav className=" flex text-sm md:text-lg">
      <ul className="  flex gap-3  md:gap-16 items-center">
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 transition-colors"
          >
            About
          </Link>
        </li>
        <li>
          {session ? (
            <UserProfile />
          ) : (
            <Link
              href="/account"
              className=" hover:text-accent-400 transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
