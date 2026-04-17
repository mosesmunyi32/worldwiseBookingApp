import Link from "next/link";

export default function LoginMessage() {
  return (
    <div className="grid bg-primary-800">
      <p className="text-center text-lg py-12 ">
        Please{" "}
        <Link href="/login" className="link">
          login
        </Link>{" "}
        to reserve this <br /> cabin now
      </p>
    </div>
  );
}
