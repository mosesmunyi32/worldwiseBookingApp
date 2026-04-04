import { getCabin } from "../../_lib/data-service";
import Cabin from "@/app/_components/cabin";

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
