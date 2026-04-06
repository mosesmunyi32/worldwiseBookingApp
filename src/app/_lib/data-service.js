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
