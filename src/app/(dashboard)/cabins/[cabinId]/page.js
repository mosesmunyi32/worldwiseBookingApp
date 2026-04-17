import Link from "next/link";
import { getCabin, getCabins } from "@/app/_lib/data-service";
import Cabin from "@/app/_components/cabin";
import DateSelector from "@/app/_components/DateSelector";
import Reservation from "@/app/_components/Reservation";

export async function generateStaticParams() {
  if (process.env.NODE_ENV === "development") return [];

  const cabins = await getCabins();
  return cabins.map((cabin) => ({ cabinId: String(cabin.id) }));
}

export default async function Cabins({ params }) {
  const { cabinId } = await params;

  const cabin = await getCabin(cabinId);

  if (!cabin) {
    return <div>Cabin not found</div>;
  }

  return (
    <div className="flex flex-col items-center flex-wrap gap-4">
      <div>
        <Cabin cabin={cabin} />
      </div>

      <div>
        <h2 className="text-4xl text-accent-400 font-semibold text-center">
          Reserve {cabin.name} today. Pay on arrival{" "}
        </h2>
      </div>

      {/* <Link href="/account/reservations">
        <button className=" btn w-md h-20 rounded-2xl border-none shadow-none font-medium text-2xl items-center justify-center bg-accent-700 text-primary-100 hover:bg-accent-900 hover:text-primary-300">
          Researve this cabin
        </button>
      </Link> */}

      <Reservation cabin={cabin} />
    </div>
  );
}
