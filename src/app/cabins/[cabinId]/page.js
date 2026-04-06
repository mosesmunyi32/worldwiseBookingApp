import { getCabin, getCabins } from "../../_lib/data-service";
import Cabin from "@/app/_components/cabin";

// export async function generateStaticParams() {
//   const cabins = await getCabins();

//   const ids = cabins.map((cabin) => {
//     return { cabinId: String(cabin.id) };
//   });
//   return ids;
// }

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
