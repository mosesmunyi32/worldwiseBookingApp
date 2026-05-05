import { Suspense } from "react";
import CabinList from "@/app/_components/cabinList";
import Filter from "@/app/_components/Filter";
import LoadingSkeleton from "@/app/_components/loadingSkeleton";

export const metadata = {
  title: "Luxury Cabins in Kenyan Dolomites",
  description:
    " Explore luxurious cabins in Kenya at Nyeri with private hot tubs, swimming pool, and peaceful nature",
};
export default async function AllCabins({ searchParams }) {
  const params = await searchParams;
  const filter = params?.capacity ?? "all";

  return (
    <section>
      <h1 className="text-4xl mb-5 text-accent-400 font-medium">
        Our Luxury Cabins
      </h1>

      <p className="text-primry-200 text-lg mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise
      </p>

      <div className="flex justify-end mb-8">
        <Filter />
      </div>

      <Suspense fallback={<LoadingSkeleton />} key={filter}>
        <CabinList filter={filter} />
      </Suspense>
    </section>
  );
}
