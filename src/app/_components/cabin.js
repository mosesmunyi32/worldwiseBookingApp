import Image from "next/image";
import TextExpander from "./TextExpander";

export default function Cabin({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, description, image } =
    cabin;

  console.log(image);
  return (
    <div>
      <div className="relative">
        <Image
          src={image}
          fill
          className="object-cover"
          alt={`Cabin ${name}`}
          quality={88}
        />
      </div>

      <div>
        <h3>Cabin {name} </h3>
        <TextExpander> {description} </TextExpander>
      </div>
    </div>
  );
}
