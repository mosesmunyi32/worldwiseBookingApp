import Image from "next/image";
import Link from "next/link";
export default function Page() {
  return (
    <main className="mt-24">
      <Image
        src="/bg.png"
        fill={true}
        quality={88}
        alt="Mountains and forest with two cabins"
      />

      <div className="relative z-10 text-center">
        <h1 className="text-8xl text-primary-50 mb-10 tracking-tight font-normal">
          Welcome to Paradise
        </h1>

        <Link
          href="/cabins"
          className="bg-accent-500 px-8 py-6 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all duration-200 ease-in-out rounded-3xl"
        >
          Explore Luxury Cabins
        </Link>
      </div>
    </main>
  );
}
