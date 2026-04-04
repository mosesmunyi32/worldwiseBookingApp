import Image from "next/image";
import { getCabins } from "../_lib/data-service";
import CabinList from "../_components/cabinList";

export const metadata = {
  title: "cabins",
};
export default function AllCabins() {
  return (
    <div>
      <h1>Our Luxury Cabins</h1>

      <p>
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise
      </p>

      <CabinList />
    </div>
  );
}
