"use server";
import { notFound } from "next/navigation";
import { supabase } from "./supabase";
import { eachDayOfInterval, parseISO } from "date-fns";
import { Temporal } from "@js-temporal/polyfill";
import { auth } from "./auth";

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

export async function getBooking(bookingId) {
  const session = await auth();

  if (!session) throw new Error("Unautharized");

  let { data, error } = await supabase
    .from("bookings")
    .select("*, cabin:cabins(*)")
    .eq("id", Number(bookingId))
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not get loaded");
  }

  return data;
}

export async function getBookingWithGuestID(guestId) {
  let { data: booking, error } = await supabase
    .from("bookings")
    .select(
      "id, created_at, startDate, endDate, numNights, numGuests, totalPrice, guestId, cabinId, status, cabins(name, image) ",
    )
    .eq("guestId", guestId);

  if (error) {
    console.error(error);
    throw new Error("Could not fetch bookings");
  }

  return booking;
}

export async function getGuest(email) {
  let { data: guests, error } = await supabase
    .from("guests")
    .select("*")
    .eq("email", email)
    .single();

  return guests;
}

export async function getBookedDatesbyCabinId(cabinId) {
  // const today = Temporal.Now.plainDateTimeISO().toString();

  let today = new Date();
  today.setUTCHours(0, 0, 0, 0);
  today = today.toISOString();

  const { data, error } = await supabase
    .from("bookings")
    .select("*")
    .eq("cabinId", cabinId)
    .or(`startDate.gte.${today},status.eq.checked-in`);

  if (error) {
    console.error(error);
    throw new Error("Bookings could not get loaded");
  }
  const bookedDates = data
    .map((booking) => {
      return eachDayOfInterval({
        start: new Date(booking.startDate),
        end: new Date(booking.endDate),
      });
    })
    .flat();

  return bookedDates;
}

export async function getSettings() {
  const { data, error } = await supabase.from("settings").select("*").single();

  if (error) {
    console.error(error);
    throw new Error("Settings could not be loaded");
  }

  return data;
}

export async function getCountries() {
  try {
    const res = await fetch(
      "https://restcountries.com/v2/all?fields=name,flag",
    );

    const countries = await res.json();
    return countries;
  } catch {
    throw new Error("countries could not be fetched");
  }
}

//Create
//create guest
export async function createGuest(newGuest) {
  const { data, error } = await supabase
    .from("guests")
    .insert([newGuest])
    .select();
  if (error) {
    console.error("supabase insert error:", error);
    throw new Error("Guests could not be created");
  }
  return data;
}

export async function createBooking({ newBooking }) {
  const { data, error } = await supabase
    .from("bookings")
    .insert("newBooking")
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Bookin could not be created");
  }

  return data;
}

//Update
export async function setDiscountNull(id) {
  const { error } = await supabase
    .from("cabins")
    .update({ discount: null, discountDays: null })
    .eq("id", id);

  if (error) console.error(error);
  throw new Error("failed to update discountDays");
}

// export async function updateGuest(id, updateFields) {
//   const { data, error } = await supabase
//     .from("guests")
//     .update("updateFields")
//     .eq("id", id)
//     .select()
//     .single();

//   if (error) {
//     console.log(error);
//     throw new Error(" Guest could not be updated");
//   }
//   return data;
// }

export async function updateBooking(id, updatedFields) {
  const { data, error } = await supabase
    .from("bookings")
    .update(updatedFields)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  return data;
}

//Delete
