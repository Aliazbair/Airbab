import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

export default function InfoCrad({ img, title, description, star, price, total, location }) {
  return (
    <div className="flex py-7 pr-4 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t">
      {/* light */}
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image className="rounded-2xl" src={img} layout="fill" objectFit="cover" />
      </div>
      {/* left */}
      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>
        {/* title */}
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2"/>

        {/* description */}
        <p className="text-sm pt-2 text-gray-500 flex-grow">{description}</p>

        {/* start */}
        <div className="flex justify-between pt-5">
            <p className="flex items-center"><StarIcon className="h-5 text-red-400"/> {star}</p>

            <div>
                <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
                <p className="text-right font-extralight">{total}</p>
            </div>
        </div>
      </div>
    </div>
  );
}
