"use client";

import Image from "next/image";
import Link from "next/link";
import { UsersIcon } from "@heroicons/react/24/solid";
import BadgeIndicator from "@/app/_components/badgeIndicator";
import TimeIndicator from "@/app/_components/timeIndicator";
import { useCountdown } from "../_customHooks/timeCustom";

export default function CabinCard({ cabin }) {
  const {
    id,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
    discountDays,
  } = cabin;

  const { hasTimeLeft, timeLeft, isExpired } = useCountdown(discountDays);

  return (
    <>
      {!isExpired && (
        <div className="relative">
          <TimeIndicator timeLeft={timeLeft} />
        </div>
      )}

      <div className="flex border-primary-800 border ">
        <div className=" flex-1 relative">
          <Image
            className="object-cover border-r border-primary-800"
            src={image}
            fill
            quality={88}
            alt={`Cabin ${name}`}
            loading="eager"
          />
        </div>

        <div className="grow   ">
          <div className="pt-5 pb-4 px-7 bg-primary-950 ">
            <h3 className="text-accent-500 font-semibold text-2xl mb-3 ">
              Cabin {name}
            </h3>

            <div className="flex">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <p className="text-lg text-primary-200">
                for upto <span className="font-bold"> {maxCapacity} </span>{" "}
                Guests
              </p>
            </div>

            <div className="flex gap-3 justify-end items-baseline ">
              {!isExpired ? (
                <>
                  <BadgeIndicator discount={discount}>
                    <span className="text-3xl font-[350]">
                      ${regularPrice - discount}
                    </span>
                  </BadgeIndicator>

                  <span className="line-through font-semibold text-primary-300">
                    ${regularPrice}
                  </span>
                </>
              ) : (
                <span className="text-3xl font-[350]">${regularPrice}</span>
              )}
              <span className="text-primary-200">/night </span>
            </div>
          </div>

          <div className="border-t-primary-800 text-right">
            <Link
              className="border border-primary-800 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900 border border-dashed   "
              href={`/cabins/${id}`}
            >
              Details & researvation &rarr;
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
