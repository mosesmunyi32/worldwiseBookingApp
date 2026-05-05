import Image from "next/image";
// import { getCabin, getCabins } from "../_lib/data-service";
import CabinCard from "./cabinCard";
import { getCabins } from "@/app/_lib/data-service";

export default async function CabinList({ filter }) {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const cabins = await getCabins();

  if (!cabins.length) return null;

  let displayedCabins;

  if (filter === "all") displayedCabins = cabins;

  if (filter === "small")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    displayedCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
    );

  if (filter === "large")
    displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return displayedCabins.length === 0 ? (
    <div className="text-center text-2xl text-accent-500 ">
      <p>no Cabins found. Try another filter</p>
    </div>
  ) : (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 ">
      {displayedCabins.map((cabin) => (
        <div key={cabin.id}>
          <CabinCard cabin={cabin} />
        </div>
      ))}
    </div>
  );
}
