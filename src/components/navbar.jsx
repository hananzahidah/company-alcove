import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  const handleContentClick = () => {
    setClick(false);
  };

  const contents = (
    <>
      <div className="lg:hidden block absolute top-16 w-full h-screen left-0 right-0 color2 transition font-medium">
        <div className="text-center text-xl flex flex-col  ">
          <a
            href="/"
            onClick={handleContentClick}
            className="my-4 py-4 hover:bg-[#ced9cf] hover:rounded"
          >
            Home
          </a>
          <a
            href="/about"
            onClick={handleContentClick}
            className="my-4 py-4 hover:bg-[#ced9cf] hover:rounded"
          >
            About Us
          </a>
          <a
            href="/service"
            onClick={handleContentClick}
            className="my-4 py-4 hover:bg-[#ced9cf] hover:rounded"
          >
            Services
          </a>
          <a
            href="/team"
            onClick={handleContentClick}
            className="my-4 py-4 hover:bg-[#ced9cf] hover:rounded"
          >
            Our Team
          </a>
        </div>
      </div>
    </>
  );

  return (
    <div className="fixed top-0 left-0 w-full z-50 py-5 px-5 lg:py-2 color2 shadow-lg">
      <div className="h-full flex justify-between items-center">
        <div className="flex items-center flex-1">
          <a href="/" className="font-bold text-xl block">
            <img
              src="alcove.svg"
              alt="alcove"
              className="h-7 w-20 md:h-8 md:w-24 object-contain"
            />
          </a>
        </div>
        <div className="md:flex gap-8  hidden font-medium">
          <a
            href="/"
            className="border-animation hover:text-[#687a69] transition hover:border-text-[#687a69] cursor-pointer"
          >
            Home
          </a>

          <a
            href="/about"
            className="border-animation hover:text-[#687a69] transition hover:border-text-[#687a69] cursor-pointer "
          >
            About Us
          </a>

          <a
            href="/service"
            className="border-animation hover:text-[#687a69] transition hover:border-text-[#687a69] cursor-pointer "
          >
            Services
          </a>

          <a
            href="/team"
            className="border-animation hover:text-[#687a69] transition hover:border-text-[#687a69] cursor-pointer "
          >
            Our Team
          </a>
        </div>
        <div>{click && contents}</div>
        <button
          className="block md:hidden transition w-5"
          onClick={handleClick}
          aria-label={click ? "Close menu" : "Open menu"}
        >
          {click ? (
            <GrClose className="text-lg hover:text-[#687a69]" />
          ) : (
            <FaBars className="text-lg hover:text-[#687a69]" />
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
