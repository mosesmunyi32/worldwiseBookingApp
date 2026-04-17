"use server";
import { redirect } from "next/navigation";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { revalidatePath } from "next/cache";

export async function updateGuest(formData) {
  const session = await auth();
  if (!session) throw new Error("you must be logged in");
  const nationalID = formData.get("nationalID");

  const nationalityRaw = formData.get("nationality");

  const [nationality, countryFlag] = nationalityRaw.split("%");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  const updateFields = { nationality, countryFlag, nationalID };

  const { data, error } = await supabase
    .from("guests")
    .update(updateFields)
    .eq("id", session.user.guestId)
    .select();
  if (error) {
    console.log(error);
    throw new Error(" Guest could not be updated");
  }

  revalidatePath("/account/profile");
}

export async function createBooking(bookingData, formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: Number(formData.get("numGuests")) || 1,
    observations: formData.get("observations")?.slice(0, 100).trim() || "",
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { data, error } = await supabase
    .from("bookings")
    .insert([newBooking])
    .select();

  if (error) throw new Error("Booking could not be created");

  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
}

export async function signInAction() {
  await signIn("google", { redirectTo: "/" });
}

export async function signOutAction() {
  await signOut({ redirectTo: "/" });
}
