import { FiArrowUpRight } from "react-icons/fi";
import { teams } from "../data/about";

export default function TeamAbout() {
  return (
    <>
      <div className="py-20 flex flex-col justify-center gap-5">
        <div className="px-10 md:px-20 flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-end sm:gap-5">
          <h1 className="text-center text-4xl uppercase font-bold">
            our team of dedication
          </h1>
          <a
            href="/team"
            className="underline flex text-xl text-center hover:text-[#a9baaa]"
          >
            Other Team <FiArrowUpRight />
          </a>
        </div>
        <div className="px-10 md:px-20 grid md:grid-cols-2 gap-5">
          {teams.map((team, index) => (
            <div
              key={index}
              className="flex sm:flex-row flex-col rounded-lg overflow-hidden"
            >
              <img
                src={team.imageUrl}
                alt={team.name}
                className="w-full h-40 sm:w-1/3 sm:h-full md:w-1/2 md:h-full aspect-square object-cover"
                style={{ objectPosition: "50% 20%" }}
              />
              <div className="flex flex-col gap-3 p-5 color3">
                <div className="flex flex-col border-b border-black pb-3">
                  <p className="text-xl font-bold">{team.name}</p>
                  <p className="font-semibold">{team.position}</p>
                </div>
                <p>{team.work}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
