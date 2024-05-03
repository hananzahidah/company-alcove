import { culture, values } from "../data/about";
import { GoNorthStar } from "react-icons/go";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export default function CultureAbout() {
  return (
    <>
      <div className="flex  py-20 px-10 md:px-20 flex-col gap-10 sm:flex-row">
        <img
          className="rounded-lg w-full h-48 sm:w-60 sm:h-auto object-cover"
          src="https://images.unsplash.com/photo-1504297050568-910d24c426d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="flex flex-col gap-5">
          <div className="text-2xl md:text-4xl font-bold text-center sm:text-end uppercase">
            Our Cultures
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culture.map((cultures, key) => (
              <div
                key={key}
                className="flex flex-col items-center sm:items-start border border-black rounded-lg p-3 gap-2"
              >
                <div className="bg-[#E1EDE3] w-10 h-10 my-2">
                  <div className="m-3">{cultures.icon}</div>
                </div>
                <p className="font-semibold text-lg text-center sm:text-left">
                  {cultures.aspect}
                </p>
                <p className="text-base text-center sm:text-left">
                  {cultures.desc}
                </p>
                <div className="flex flex-col gap-2">
                  {cultures.benefits.map((benefit, index) => (
                    <div key={index} className="flex gap-2 items-start">
                      <p>•</p>
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <div className="flex flex-col gap-5 py-20">
          <div className="px-10 md:px-20 flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-end sm:gap-5">
            <h1 className="text-center text-2xl md:text-4xl uppercase font-bold">
              our values
            </h1>
            <div className="flex text-3xl text-center">
              <MdNavigateBefore />
              <MdNavigateNext />
            </div>
          </div>

          <div className="flex justify-between overflow-x-auto gap-5 px-10 pb-10 md:px-20">
            {values.map((value, index) => (
              <div key={index} className=" rounded-lg">
                <div className="flex flex-col gap-5">
                  <div className="relative gap-3 w-72 md:w-96 md:h-full">
                    <img
                      src={value.imageUrl}
                      alt={value.name}
                      className="w-full h-[500px] md:h-[450px] object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end">
                      <div className="bg-[#24382b] bg-opacity-90 m-3 p-3 rounded-lg flex flex-col gap-3 h-[300px] md:h-60">
                        <div className="bg-[#E1EDE3] bg-opacity-50 w-10 h-10 my-2 rounded-lg">
                          <div className="m-3">{value.icon}</div>
                        </div>
                        <p className="text-white text-3xl font-semibold">
                          {value.name}
                        </p>
                        <p className="text-white">{value.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
