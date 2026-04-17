import { auth } from "@/app/_lib/auth";
export { default } from "next-auth/middleware";
export const proxy = auth;

export const config = {
  matcher: ["/account"],
};
