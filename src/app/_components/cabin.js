import Image from "next/image";
import TextExpander from "./TextExpander";
import { MapPinIcon, UsersIcon, EyeOffIcon } from "lucide-react";

export default function Cabin({ cabin }) {
  const { name, maxCapacity, description, image } = cabin;

  return (
    <div className="grid grid-cols-[3fr_4fr] gap-20 border-y border-dashed border-primary-800 py-5 px-10 lg:pl-20 mb-24">
      <div className="relative h-100 scale-[1.15] -translate-x-3">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={`Cabin ${name}`}
          quality={88}
        />
      </div>

      <div>
        <h3 className="text-accent-100 font-black text-7xl mb-5 -translate-x-[30%] bg-primary-950 p-6 pb-1 w-[150%]">
          Cabin {name}
        </h3>

        <div className="text-lg text-primary-300 mb-10">
          <TextExpander>{description}</TextExpander>
        </div>

        <ul className="flex flex-col gap-4 mb-7">
          <li className="flex gap-3 items-center">
            <UsersIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>

          <li className="flex gap-3 items-center">
            <MapPinIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Located in the heart of the{" "}
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>

          <li className="flex gap-3 items-center">
            <EyeOffIcon className="h-5 w-5 text-primary-600" />
            <span className="text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
