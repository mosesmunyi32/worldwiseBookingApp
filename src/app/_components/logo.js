import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex text-sm items-center gap-4 z-10">
      <div>
        <Image
          src="/logo.png"
          alt="The WorldOasis App Logo"
          height={35}
          width={35}
          quality={88}
          loading="eager"
        />
      </div>

      <span className=" text-sm md:text-xl font-semibold text-primary-200">
        The World Oasis
      </span>
    </Link>
  );
}
