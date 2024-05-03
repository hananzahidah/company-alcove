import React, { useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export default function HomeTesti() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function nextTestimonial() {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  }

  function prevTestimonial() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  }

  return (
    <div className="p-10 color3 relative">
      <h1 className="text-4xl text-center flex flex-col gap-5 uppercase font-bold">
        Our Clients
      </h1>
      <div className="flex flex-col gap-4">
        <Testi {...testimonials[currentIndex]} />
      </div>
      <div className="absolute inset-y-0 left-0">
        <button
          onClick={prevTestimonial}
          aria-label="before"
          className="pl-5 md:pl-16 pt-72"
        >
          <MdNavigateBefore className="text-5xl hover:text-gray-500" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0">
        <button
          onClick={nextTestimonial}
          aria-label="next"
          className="pr-5 md:pr-16 pt-72"
        >
          <MdNavigateNext className="text-5xl hover:text-gray-500" />
        </button>
      </div>
    </div>
  );
}

export function Testi({ name, image, occupation, quote }) {
  return (
    <div className="flex flex-col items-center gap-4 py-8 md:px-32 px-9">
      <img
        src={image}
        alt={occupation}
        className="w-full h-40 md:h-60 object-cover rounded-lg "
      />
      <p className="text-center text-xl">"{quote}"</p>
      <FaQuoteLeft className="text-xl" />

      <div className="flex flex-col justify-center">
        <p className="font-bold text-2xl text-center">{name}</p>
        <p className="text-center text-lg font-semibold">{occupation}</p>
      </div>
    </div>
  );
}

const testimonials = [
  {
    name: "John Doe",
    image:
      "https://images.unsplash.com/photo-1583373834259-46cc92173cb7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    occupation: "CEO, ABC Corporation",
    quote:
      "Working with the architecture team was an absolute pleasure. Their attention to detail and innovative designs truly set them apart. I highly recommend them for any project.",
  },
  {
    name: "Jane Smith",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    occupation: "Interior Designer",
    quote:
      "I've collaborated with many architecture firms, but none have matched the level of creativity and professionalism exhibited by this team. Their designs are both functional and breathtaking.",
  },
  {
    name: "David Johnson",
    image:
      "https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    occupation: "Real Estate Developer",
    quote:
      "The architecture company exceeded my expectations at every turn. From initial concept to final execution, they demonstrated expertise and dedication. I look forward to working with them again.",
  },
  {
    name: "Emily Brown",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    occupation: "Homeowner",
    quote:
      "Hiring this architecture firm was the best decision I made for my home renovation project. They listened to my ideas and transformed them into a reality beyond what I could have imagined.",
  },
];
