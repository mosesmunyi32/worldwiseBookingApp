import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

import {
  format,
  isToday,
  parseISO,
  isPast,
  formatDistance,
  formatDistanceToNow,
  isFuture,
  startOfToday,
  isAfter,
} from "date-fns";
import DeleteReservation from "./DeleteReservedCabin";
import Link from "next/link";

// 2026-04-10T15:28:37

function ReservationCard({ booking, onDelete }) {
  const formatDistanceFromNow = (dateStr) => {
    formatDistance(parseISO(dateStr), new Date(), { addSuffix: true }).replace(
      "about ",
      "",
    );
  };

  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    numGuests,
    totalPrice,
    created_at,
    cabinId,
    cabins,
  } = booking;

  const name = cabins?.name;
  const image = cabins?.image;
  const start = new Date(startDate);
  const today = startOfToday();

  return (
    <div className="flex border border-primary-800">
      <div className="relative w-40 aspect-square">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          sizes="128px"
          className="object-cover border-r border-primary-800"
        />
      </div>

      <div className=" grow flex py-3 flex-col px-2 ">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold">
            {numNights} nights in Cabin {name}
          </h3>

          {isPast(start) && !isToday(start) ? (
            <span className="bg-yellow-800 text-yellow-200 h-7 px-3 uppercase text-xs font-bold flex items-center rounded-sm ">
              {" "}
              past{" "}
            </span>
          ) : (
            <span className="bg-green-800 text-yello-200 h-7 px-3 uppercase text-xs font-bold flex items-center roundd-sm ">
              {" "}
              upcoming{" "}
            </span>
          )}
        </div>

        <p className="text-lg text-primary-300">
          {/* {isToday(new Date(startDate)) && isFuture(new Date(startDate)) ? (
            <span className="text-accent-500"> (Today) </span>
          ) : (
            <span className="text-accent-500">
              {" "}
              (in {formatDistanceToNow(startDate)} days)
            </span>
          )} */}
          {isToday(new Date(startDate)) && (
            <span className="text-accent-500"> (Today) </span>
          )}
          {isAfter(start, today) && !isToday(new Date(startDate)) && (
            <span className="text-accent-500">
              {" "}
              (in {formatDistanceToNow(new Date(startDate))})
            </span>
          )}
          {format(new Date(startDate), "EEE, MM dd yyy")}
          &mdash; {format(new Date(endDate), "EEE, MM dd yyy")}
        </p>

        <div className="flex gap-5 mt-auto items-baseline ">
          <p className="text-xl font-semibold text-accent-400">
            {" "}
            ${totalPrice}{" "}
          </p>
          <p className="text-primary-400">&bull;</p>
          <p className="text-lg text-primary-300">
            {" "}
            {numGuests} guest{numGuests > 1 && "s"}{" "}
          </p>
          <p className="ml-auto tex-sm text-primary-400 ">
            Booked {format(new Date(created_at), "EEE,  MM dd yyy, p")}
          </p>
        </div>
      </div>

      <div className="flex  flex-col border border-primary-800 w-25">
        <Link
          href={`/account/reservations/edit/${id}`}
          className="group flex items-center gap-2 uppercase text-sm  font-bold text-primary-300 border-b border-primary-800 grow px-3 hover:bg-accent-600 tansition-colors hover:text-primary-900 "
        >
          <PencilSquareIcon className="h-5 w-5 text-primary-600 group-hover:text-primary-800 transition-colors " />
          <span className="mt-1">Edit</span>
        </Link>

        <div className="group flex items-center gap-2 uppercase text-sm  font-bold text-primary-300 border-b border-primary-800 grow px-3 hover:bg-accent-600 tansition-colors hover:text-primary-900 ">
          <DeleteReservation bookingId={id} onDelete={onDelete} />
        </div>
      </div>
    </div>
  );
}

export default ReservationCard;
