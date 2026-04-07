import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center ">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to the Wild Oasis
        </h1>

        <div className="space-y-8">
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perferendis nihil illo itaque adipisci, quia dicta quo? Architecto,
            vel! Ducimus deleniti veniam iste sapiente accusamus reprehenderit a
            totam et nobis eveniet?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
            nisi labore consequatur sed earum odio eos vero, voluptates error
            facilis, molestiae voluptatibus iusto veniam alias ipsa velit dolore
            nam aliquid.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            dolor recusandae enim libero quo corrupti possimus ea dicta incidunt
            quasi saepe, quae nemo dolores earum? Assumenda labore earum
            blanditiis ex!
          </p>
        </div>
      </div>

      <div className="col-span-2 relative aspect-square">
        <Image
          src="/about-1.jpg"
          quality={80}
          fill
          className="object-cover"
          alt="Family sitting around a fire pit infront of cabin"
        />
      </div>

      <div className="aspect-square col-span-2 relative">
        <Image
          src="/about-2.jpg"
          quality={88}
          fill
          className="object-cover"
          alt="Family that Manages the Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h2 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 1962
        </h2>

        <div className="space-y-8">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            architecto iste, similique dolorem iure atque illum saepe
            praesentium quos ab officiis deserunt ea, repellat exercitationem
            fuga porro amet? Unde, totam!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia
            architecto iste, similique dolorem iure atque illum saepe
            praesentium quos ab officiis desernpunt ea, repellat exercitationem
            fuga porro amet? Unde, totam!
          </p>
          <div>
            <Link
              href="/cabins"
              className="btn btn-xl bg-accent-600 text-primary-900 hover:bg-accent-300 hover:text-primary-900"
            >
              explore Our Luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
