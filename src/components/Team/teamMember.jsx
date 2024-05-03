import React, { useEffect, useState } from "react";
import { jobDesc, position } from "../data/about";
import { CiMail, CiPhone } from "react-icons/ci";

function TeamMember() {
  const [teamMember, setTeamMember] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const userAPI = "https://randomuser.me/api/?results=8";
      const response = await fetch(userAPI);
      const responseData = await response.json();
      setTeamMember(responseData.results);
    } catch (error) {
      console.log("Error Fetching Data", error);
    }
  };

  return (
    <div className="p-10 lg:p-20 flex flex-col gap-24 items-center">
      <div className="text-center flex flex-col justify-center gap-5">
        <p className="text-xl md:text-3xl font-bold uppercase">
          discover these amazing people
        </p>
        <p className="text-xs md:text-base">
          We are proud to have a diverse and talented team dedicated to creating
          innovative and sustainable architectural solutions. Each member of our
          team brings a unique set of skills, experiences, and perspectives,
          contributing to our collaborative approach in designing spaces that
          inspire and endure.
        </p>
      </div>
      <div className="flex flex-wrap justify-center w-full lg:grid-cols-3 gap-5">
        {teamMember.map((member, index) => (
          <div
            key={index}
            className="relative flex justify-center mb-12 mt-10 w-full sm:w-80"
          >
            <div className="flex flex-col rounded-lg overflow-hidden w-full h-full color3">
              <div className="flex flex-col gap-3  px-5 pt-10 sm:pt-20 pb-5 justify-between h-full">
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex flex-col text-center">
                    <p className="text-xl font-bold text-[#326342]">{`${member.name.first} ${member.name.last}`}</p>
                    <p className="font-semibold text-base">
                      {position[index + 1]}
                    </p>
                  </div>
                  <p className="text-xs sm:text-sm text-center pb-5">
                    {jobDesc[index + 1]}
                  </p>
                </div>
                <div className="flex flex-col items-center pt-2 gap-1 border-t border-[#326342]">
                  <p className="font-semibold text-lg">contact:</p>
                  <p className="flex items-center gap-2 text-xs sm:text-sm">
                    <CiMail className="" /> {member.email}
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute -top-16 ">
              <img
                src={member.picture.large}
                alt={member.name.first}
                className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-[#35513f] aspect-square rounded-full object-cover object-center"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeamMember;
