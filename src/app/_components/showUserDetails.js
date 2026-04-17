import { User } from "lucide-react";
import { auth } from "../_lib/auth";
import LogoutModal from "./logoutModal";

export default async function ShowUserDetails() {
  const session = await auth();
  const firstName = session?.user?.name?.split(" ")[0] || "User";

  return session ? (
    <div className="dropdown dropdown-right ">
      <div
        tabIndex={0}
        role="button"
        className="btn m-1 border  border-dotted border-primary-800 text-accent-300 shadow-none bg-primary-900"
      >
        <User /> <span> {firstName} </span>
      </div>
      <ul
        tabIndex="-1"
        className="dropdown-content menu flex flex-col gap-1  bg-primary-950  text-accent-300 rounded-box z-1 w-52 p-2 shadow-sm"
      >
        <li className="border-b border-dotted">{session?.user?.name} </li>
        <li className="border-b border-dotted">{session?.user?.email}</li>
        <li className="border-b border-dotted">
          <LogoutModal />
        </li>
      </ul>
    </div>
  ) : (
    <a
      href="/login"
      className="btn border-none ml-10 bg-primary-800 shadow-none text-primary-100"
    >
      click to Login
    </a>
  );
}
