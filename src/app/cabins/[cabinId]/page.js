import { getCabin, getCabins } from "../../_lib/data-service";
import Cabin from "@/app/_components/cabin";

export async function generateStaticParams() {
  // Skip in development to avoid slow recompiles
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
    <div>
      <Cabin cabin={cabin} />
    </div>
  );
}
