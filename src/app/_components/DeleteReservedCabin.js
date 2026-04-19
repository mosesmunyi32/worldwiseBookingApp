"use client";

import { Trash } from "lucide-react";
import { useTransition } from "react";

export default function DeleteReservation({ bookingId, onDelete }) {
  const [isPending, startTransition] = useTransition();

  function handleDelete() {
    if (confirm("Are you sure you want to delete this reservation?"))
      startTransition(() => onDelete(bookingId));
  }

  return (
    <button
      onClick={handleDelete}
      className="group text-xs uppercase font-bold text-primary-300 grow hover:bg-accent-600 transition-colors hover:text-primary-900 flex items-center justify-center gap-2"
    >
      {isPending ? (
        <span className="mx-auto">
          <p>Loading...</p>
        </span>
      ) : (
        <>
          <Trash className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span className="mt-1">Delete</span>
        </>
      )}
    </button>
  );
}
