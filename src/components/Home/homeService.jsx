import React, { useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { services } from "../data/services";

export default function HomeService() {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(index);
  };

  return (
    <div className="p-10 md:p-20 flex flex-col justify-center gap-10">
      <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-end sm:gap-5">
        <h1 className="text-center text-4xl uppercase font-bold">
          our services
        </h1>
        <a
          href="/service"
          className="underline flex text-xl text-center hover:text-[#a9baaa]"
        >
          More Services <FiArrowUpRight />
        </a>
      </div>
      <div className="w-full md:h-96 h-[900px] sm:h-[700px] flex flex-col md:flex-row gap-2">
        {services.map((services, index) => (
          <div
            key={index}
            onClick={() => handleCardClick(index)}
            className={`card relative min-h-16 h-full rounded-3xl overflow-hidden flex items-end flex-grow cursor-pointer ${
              activeCard === index ? "active" : ""
            } `}
          >
            <img
              className="background absolute inset-0 w-full h-full object-cover object-center brightness-75 -z-10"
              src={services.image}
              alt={services.title}
            />
            <a
              href="/service"
              aria-label="Read more about alcove's services"
              className="flex justify-center items-center min-w-12 max-w-12 h-12 rounded-[50%] absolute right-3 top-3 bg-[#ffffffbe] font-extrabold hover:bg-white"
            >
              <FiArrowUpRight className="font-extrabold text-2xl text-black" />
            </a>
            <div className="card-content flex flex-col absolute left-3 right-3 bottom-3 overflow-hidden z-10 ">
              <div className="md:stittle md:w-40 lg:w-52 text-xl sm:text-2xl lg:text-3xl font-semibold p-2 ">
                {services.title}
              </div>
              <h3 className="desc text-sm sm:text-base px-2 md:w-[350px] lg:w-[400px]">
                {services.desc}
              </h3>
            </div>
            <div className="backdrop"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
