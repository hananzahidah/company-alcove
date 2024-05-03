import { services } from "../data/services";

export default function ListService() {
  return (
    <>
      {services.map((list, index) => (
        <div
          key={index}
          className={`px-10 py-20 md:p-20 flex flex-col gap-10 w-screen ${
            index % 2 !== 0 ? "" : "bg-[#e3ede3]"
          }`}
        >
          <div className="flex w-full h-full justify-center sm:gap-5">
            <div className="flex flex-col justify-between w-full lg:w-[680px] gap-10">
              <p className="text-2xl text-center sm:text-left sm:text-4xl md:text-5xl font-bold uppercase">
                {list.title}
              </p>
              <img
                src={list.image}
                alt={list.title}
                className="rounded-lg object-cover md:h-72 w-full h-40"
              />
            </div>

            <img
              src={list.image2}
              alt={list.title}
              className="rounded-lg w-32 h-auto sm:h-[250px] md:h-auto md:w-56 lg:h-[430px] lg:w-[400px] object-cover sm:block hidden"
            />
          </div>

          <div className="flex md:flex-row flex-col w-full h-full justify-center flex-wrap lg:flex-nowrap gap-10">
            <div className="flex md:w-full lg:w-[680px]">
              <p className="text-justify">{list.more}</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-5 w-full h-full lg:w-[400px]">
              {list.benefit.map((detail, index) => (
                <div
                  key={index}
                  className="flex items-center sm:items-start flex-col gap-2 rounded-lg color3 p-3 h-full hover:bg-[#35513f] hover:text-white cursor-pointer"
                >
                  <div className="text-xl">{list.icon[index]} </div>
                  <p className="font-bold text-base">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
