import { UsersIcon } from "lucide-react";

export default function LoadingSkeleton() {
  return (
    <div
      className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14"
      aria-hidden="true"
    >
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="flex border border-primary-800 animate-pulse">
          <div className="skeleton flex-1 bg-primary-800 min-62.5" />

          <div className="skeleton grow">
            <div className="pt-5 pb-4 px-7 bg-primary-950">
              <div className="h-8 w-2/3 bg-primary-800 rounded mb-4" />

              <div className="flex items-center gap-3 mb-4">
                <UsersIcon className="h-5 w-5 text-primary-700" />

                <div className="h-5 w-32 bg-primary-800 rounded" />
              </div>

              <div className="flex gap-3 justify-end items-baseline">
                <div className="h-8 w-20 bg-primary-800 rounded" />

                <div className="h-4 w-12 bg-primary-800 rounded" />
              </div>
            </div>

            <div className="border-t border-primary-800 p-5 flex justify-end">
              <div className="h-5 w-40 bg-primary-800 rounded" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
