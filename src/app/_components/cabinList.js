import Image from "next/image";
// import { getCabin, getCabins } from "../_lib/data-service";
import CabinCard from "./cabinCard";
import { getCabins } from "@/app/_lib/data-service";

export default async function CabinList() {
  // await new Promise((resolve) => setTimeout(resolve, 3000));
  const cabins = await getCabins();

  if (!cabins.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 ">
      {cabins.map((cabin) => (
        <div key={cabin.id}>
          <CabinCard cabin={cabin} />
        </div>
      ))}
    </div>
  );
}
