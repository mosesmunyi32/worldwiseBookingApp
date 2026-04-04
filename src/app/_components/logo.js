import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <div>
        <Image
          src="/logo.png"
          alt="The WorldOasis App Logo"
          height={60}
          width={60}
          quality={88}
          loading="eager"
        />
      </div>

      <span className="text-xl font-semibold text-primary-100">
        The World Oasis
      </span>
    </Link>
  );
}
