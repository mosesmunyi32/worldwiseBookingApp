import Image from "next/image";
import { getCabins } from "../_lib/data-service";
import CabinCard from "./cabinCard";

export default async function CabinList() {
  const cabins = await getCabins();

  if (!cabins.length) return null;

  return (
    <div>
      {cabins.map((cabin) => (
        <div key={cabin.id}>
          <CabinCard cabin={cabin} />
        </div>
      ))}
    </div>
  );
}
