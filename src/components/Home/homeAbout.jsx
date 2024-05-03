import { FiArrowUpRight } from "react-icons/fi";
import { culture, teams } from "../data/about";

export default function HomeAbout() {
  return (
    <>
      <div className="p-10 md:p-20 flex flex-col gap-10">
        <div className="flex flex-col gap-10">
          <div className="flex gap-10 flex-wrap sm:flex-nowrap justify-center">
            <div className="flex flex-col gap-3">
              <div className="text-4xl font-bold uppercase">Our Story</div>
              <p className="text-justify">
                Founded in 2008 by Michael Reynolds, Alcove began as a small
                studio with a big vision. Over the years, the firm has grown
                steadily, garnering acclaim for its thoughtful approach to
                design and dedication to client satisfaction. Today, Alcove
                continues to push boundaries and set new standards in the field
                of architecture.
              </p>
              <a
                href="/about"
                className="underline flex text-xl hover:text-[#a9baaa]"
              >
                Detail Story <FiArrowUpRight />
              </a>
            </div>
            <div className="text-center text-white text-2xl rounded-lg font-semibold color1 flex justify-center items-center p-5">
              "Transforming Dreams into Architectural Marvels: Crafting Spaces,
              Inspiring Lives with Alcove Architecture."
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="story"
              className="rounded-lg h-60 w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-10 sm:flex-row justify-center">
          <img
            className="rounded-lg w-full h-60 sm:w-60 sm:h-auto object-cover"
            src="https://images.unsplash.com/photo-1504297050568-910d24c426d3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="culture"
          />

          <div className="flex flex-col gap-5">
            <div className="text-4xl font-bold text-center sm:text-end uppercase">
              Our Cultures
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {culture.map((cultures, key) => (
                <ListCulture key={key} {...cultures} />
              ))}
            </div>
            <a
              href="/about"
              className="underline flex justify-end  text-xl hover:text-[#a9baaa]"
            >
              Detail Culture <FiArrowUpRight />
            </a>
          </div>
        </div>
      </div>

      <div className="py-20 flex flex-col justify-center gap-5 color1">
        <div className="text-white px-10 md:px-20 flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-end sm:gap-5">
          <h1 className="text-center text-4xl uppercase font-bold">
            our team of dedication
          </h1>
          <a
            href="/about"
            className="underline flex text-xl text-center hover:text-[#a9baaa]"
          >
            More Team <FiArrowUpRight />
          </a>
        </div>
        <div className="flex justify-between overflow-x-auto gap-5 px-10 p-10 md:px-20">
          {teams.map((teams, key) => (
            <ListTeam key={key} {...teams} />
          ))}
        </div>
      </div>
    </>
  );
}

export function ListTeam({ name, position, imageUrl }) {
  return (
    <div className="p-3 rounded-lg color2 transform scale-100 hover:scale-105 transition duration-300 ease-in-out">
      <div className="flex flex-col items-center justify-between gap-3 w-56 h-full">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-60 object-cover rounded-lg"
        />
        <div>
          <p className="text-center font-semibold text-xl">{name}</p>
          <p className="text-center">{position}</p>
        </div>
      </div>
    </div>
  );
}

export function ListCulture({ aspect, desc, icon }) {
  return (
    <div className="flex flex-col items-center sm:items-start border border-black rounded-lg p-3">
      <div className="bg-[#E1EDE3] w-10 h-10 my-2">
        <div className="m-3">{icon}</div>
      </div>
      <p className="font-semibold text-lg text-center sm:text-left">{aspect}</p>
      <p className="text-base text-center sm:text-left">{desc}</p>
    </div>
  );
}
