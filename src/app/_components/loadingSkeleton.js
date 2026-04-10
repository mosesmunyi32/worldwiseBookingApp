import { UsersIcon } from "lucide-react";

export default function LoadingSkeleton() {
  return (
    <div className=" skeleton grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14 ">
      <div className="flex border-primary-800 border ">
        <div className=" flex-1 relative"></div>

        <div className="grow skeleton  ">
          <div className="pt-5 pb-4 px-7 bg-primary-950 ">
            <h3 className="skeleton-text text-accent-500 font-semibold text-2xl mb-3 ">
              cabin
            </h3>

            <div className="flex">
              <UsersIcon className=" h-5 w-5 text-primary-600" />
              <p className="skeleton-text text-lg text-primary-200">
                for upto <span className="font-bold"> ? </span> Guests
              </p>
            </div>

            <div className="skeleton flex gap-3 justify-end items-baseline ">
              <span className="skeleton-text text-3xl font-[350]">$...</span>

              <span className="skeleton-text text-primary-200">/night </span>
            </div>
          </div>

          <div className="skeleton border-t-primary-800 text-right">
            <p className="skeleton-text">Details & researvation &rarr;</p>
          </div>
        </div>
      </div>
    </div>
  );
}
