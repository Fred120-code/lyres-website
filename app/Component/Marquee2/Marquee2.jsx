import React from "react";
import { marqueeItems2 } from "../../JsonData/marqueeItems2";
import Image from "next/image";

const Marquee2 = () => {
  return (
    <>
      <div className=" overflow-hidden whitespace-nowrap py-12">
        <div className=" animate-marquee flex items-center gap-8">
          {marqueeItems2.map((item, index) => (
            <div key={index} className="flex items-center gap-10 mr-12 ">
              <div className="w-[250px] h-[100px] overflow-hidden rounded-full">
                <Image
                  src={item.img}
                  alt={item.title || "Gallery Image"}
                  width={250}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>

              <div
                className="min-w-[250px] h-[100px] border-2 border-gray-300
                       rounded-full flex items-center justify-center"
              >
                <span className="text-center text-black text-2xl font-bold uppercase px-4">
                  {item.title}
                </span>
              </div>
            </div>
          ))}

          {marqueeItems2.map((item, index) => (
            <div key={index} className="flex items-center gap-10 mr-12 ">
              <div className="w-[250px] h-[100px] overflow-hidden rounded-full">
                <Image
                  src={item.img}
                  alt={item.title || "Gallery Image"}
                  width={250}
                  height={100}
                  className="object-cover w-full h-full"
                />
              </div>

              <div
                className="min-w-[250px] h-[100px] border-2 border-gray-300
                       rounded-full flex items-center justify-center"
              >
                <span className="text-center text-black text-2xl font-bold uppercase px-4">
                  {item.title}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Marquee2;
