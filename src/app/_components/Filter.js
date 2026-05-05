"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

function Filter() {
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const activeFilter = searchParams.get("capacity") ?? "all";

  function handleFilter(filter) {
    const params = new URLSearchParams();
    params.set("capacity", filter);
    router.replace(`${pathName}?${params.toString()}`, { scroll: false });
  }

  return (
    <fieldset className="border-x px-1 border-t border-dashed border-primary-800 gap-2 flex">
      <legend className="mx-auto text-sm border-x px-1 my-2 border-t border-dotted border-primary-800 text-center text-primary-400 ">
        {" "}
        Filter cabins{" "}
      </legend>
      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="all"
      >
        all cabins
      </Button>

      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="small"
      >
        2&mdash;3 guests
      </Button>

      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="medium"
      >
        4&mdash;7 guests
      </Button>

      <Button
        activeFilter={activeFilter}
        handleFilter={handleFilter}
        filter="large"
      >
        8&mdash;12 guests
      </Button>
    </fieldset>
  );
}

function Button({ children, filter, handleFilter, activeFilter }) {
  return (
    <button
      onClick={() => handleFilter(filter)}
      className={`px-5 py-2 border border-primary-800 text-sm hover:bg-primary-700 text-primary-50 rounded-2xl ${filter === activeFilter ? "bg-primary-700 text-primary-50" : ""}  `}
    >
      {children}
    </button>
  );
}

export default Filter;
