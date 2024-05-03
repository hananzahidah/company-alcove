import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";

export default function HistoryAbout() {
  return (
    <>
      <div className="p-10 md:p-20 flex flex-col justify-center gap-5">
        <div className=" flex gap-10 flex-wrap sm:flex-nowrap">
          <div className="flex flex-col gap-3">
            <div className="text-2xl md:text-4xl font-bold uppercase">
              Story behind alcove
            </div>
            <p className="text-justify">
              Founded in 2008 by Michael Reynolds, Alcove began as a small
              studio with a big vision. Over the years, the firm has grown
              steadily, garnering acclaim for its thoughtful approach to design
              and dedication to client satisfaction. Today, Alcove continues to
              push boundaries and set new standards in the field of
              architecture.
            </p>
          </div>
          <div className="text-center text-white text-xl md:text-2xl rounded-lg font-semibold color1 flex justify-center items-center p-5">
            "Transforming Dreams into Architectural Marvels: Crafting Spaces,
            Inspiring Lives with Alcove Architecture."
          </div>
        </div>
      </div>

      <div className="color3 flex justify-between flex-wrap">
        <div className="w-full md:w-1/3">
          <img
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="micahel reynolds"
            className="w-full h-60 md:h-full object-cover md:object-bottom"
          />
        </div>
        <div className="flex flex-col justify-center md:w-2/3 gap-10 py-10 px-10 md:p-20 w-full">
          <div className="flex flex-col justify-center items-center sm:items-start sm:gap-2  ">
            <div className="text-center md:text-left uppercase font-bold text-xl ">
              meet the founder
            </div>
            <div className="text-center md:text-left uppercase font-bold text-2xl md:text-4xl">
              Michael Reynolds
            </div>
          </div>
          <div className="flex flex-col gap-5 text-justify">
            <p>
              Michael Reynolds, the visionary founder and principal architect of
              Alcove Architects. With a passion for design and a keen eye for
              innovation, Michael embarked on a journey to redefine the
              landscape of architecture.
            </p>
            <p>
              Michael's design philosophy seamlessly blends form and function,
              ensuring every detail serves a purpose. His visionary approach
              garners acclaim, driving Alcove Architects to deliver exceptional
              designs that surpass expectations. As a leader, Michael inspires
              his team to push boundaries and innovate, leaving an indelible
              mark on architectural design.
            </p>
          </div>
          <div className="flex justify-between flex-wrap gap-5 items-center">
            <div className="flex flex-col gap-3">
              <p className="font-bold text-2xl uppercase">award</p>
              <div className="flex flex-col gap-2 text-lg">
                {michaelAwards.map((award, index) => (
                  <div key={index} className="flex gap-3 items-center">
                    <p className="font-semibold">{award.year}</p>

                    <p className="border-l pl-3 border-black">
                      <span className="font-semibold">{award.title}</span> -{" "}
                      {award.organization}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="color1 py-20 flex flex-col justify-center gap-10">
        <div className="flex flex-col justify-center items-center sm:flex-row sm:justify-between sm:items-end sm:gap-5 px-10 md:px-20 text-white">
          <div className="text-center uppercase font-bold text-2xl md:text-4xl">
            we've come this far
          </div>
          <div className="flex text-3xl text-center">
            <MdNavigateBefore />
            <MdNavigateNext />
          </div>
        </div>

        <div className="flex justify-between overflow-x-auto gap-5 px-10 pb-10 md:px-20">
          {milestone.map((time, index) => (
            <div
              key={index}
              className={`p-3 rounded-lg color2 ${
                index % 2 !== 0 ? "mt-14" : ""
              }`}
            >
              <div className="flex flex-col gap-5">
                <div className="relative gap-3 w-80 h-full">
                  <img
                    src={time.image}
                    alt=""
                    className="w-full h-60 object-cover rounded-lg brightness-75"
                  />
                  <div className="absolute bottom-2 left-2 text-[white] text-5xl font-semibold">
                    {time.year}
                  </div>
                </div>
                <div className="text-justify">{time.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const milestone = [
  {
    id: 1,
    year: 2008,
    description:
      "Founded by Michael Reynolds, Alcove emerged as a small yet ambitious studio. From our inception, we've remained steadfast in our commitment to crafting spaces that transcend the ordinary, infusing each project with innovation, creativity, and a deep understanding of our clients' needs.",
    image:
      "https://plus.unsplash.com/premium_photo-1663126261026-c1ef89ae2567?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    year: 2012,
    description:
      "Just four years after our establishment, Alcove celebrated a significant milestone as we completed our first major commercial project, marking a pivotal moment in our journey towards becoming a prominent player in the architectural industry.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1784&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    year: 2016,
    description:
      "Alcove had firmly established itself as a leader in sustainable design, receiving accolades for our eco-friendly approach and pioneering solutions that prioritize environmental conservation.",
    image:
      "https://images.unsplash.com/photo-1506092375312-27276f44a612?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    year: 2020,
    description:
      "Alcove expanded its reach globally, undertaking projects in diverse locations across continents, further solidifying our reputation as a versatile and dynamic architectural firm.",
    image:
      "https://images.unsplash.com/photo-1528469138590-fa12d3193392?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    year: 2024,
    description:
      "Alcove leads architectural innovation with diverse projects across residential, commercial, and institutional sectors. Committed to excellence, integrity, and client satisfaction, we shape the built environment with bold vision and dedication to design excellence.",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const michaelAwards = [
  {
    title: "Architect of the Year",
    year: 2010,
    organization: "American Institute of Architects (AIA)",
  },
  {
    title: "Design Innovation Award",
    year: 2015,
    organization: "International Design Association (IDA)",
  },
  {
    title: "Excellence in Sustainable Design",
    year: 2018,
    organization: "Green Architects Association (GAA)",
  },
];
