import { notFound } from "next/navigation";
import { supabase } from "./supabase";

export async function getCabins() {
  const { data: cabins, error } = await supabase.from("cabins").select("*");

  if (error || !cabins) {
    throw new Error("Cabin cannot be found");
  }

  return cabins;
}

export async function getCabin(id) {
  console.log("getting cabins");
  const { data: cabin, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", Number(id))
    .single();

  if (error || !cabin) {
    notFound();
  }

  return cabin;
}

// export async function UpdateCabinUponExpirely(id) {
//   const dateNow = new Date().toISOString();

//   const { data, error } = await supabase
//     .from("cabins")
//     .update({ discountDays: null, dicount: null })
//     .lt("discountDayz", dateNow)
//     .eq("id", Number(id))
//     .select();

//   if (error) return console.error("failed to update the cabin");
// }
