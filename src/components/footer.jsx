import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { MdCall, MdOutlineEmail } from "react-icons/md";
import { services } from "./data/services";

export default function Footer() {
  return (
    <div className="p-10 color1 text-white">
      <div className="flex flex-wrap justify-between gap-10">
        <div className="flex flex-col gap-5 items-start">
          <img
            src="alcove2.svg"
            alt="alcove"
            className="h-7 w-20 lg:h-12 lg:w-36 object-contain"
          />
          <div className="flex flex-col flex-wrap gap-3">
            <b>Building Visions, Creating Reality</b>
            <div>
              <p>123 Main Street</p>
              <p>Cityville, State</p>
            </div>
            <div>
              <div className="flex items-center flex-wrap gap-2">
                <MdOutlineEmail />
                <p>alcove@mail.com</p>
              </div>
              <div className="flex items-center flex-wrap gap-2">
                <MdCall />
                <p>+1 (555) 123-4567</p>
              </div>
            </div>
            <div>
              <div className="flex flex-wrap gap-2">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  className="p-2 border rounded-full border-white hover:border-gray-400 hover:text-gray-400 cursor-pointer"
                  aria-label="Kunjungi Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  className="p-2 border rounded-full border-white hover:border-gray-400 hover:text-gray-400 cursor-pointer"
                  aria-label="Kunjungi Youtube"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  className="p-2 border rounded-full border-white hover:border-gray-400 hover:text-gray-400 cursor-pointer"
                  aria-label="Kunjungi Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.facebook.com/"
                  target="_blank"
                  className="p-2 border rounded-full border-white hover:border-gray-400 hover:text-gray-400 cursor-pointer"
                  aria-label="Kunjungi Facebook"
                >
                  <FaFacebookF />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-3 pl-3">
          <p className="font-bold text-xl md:text-2xl">Alcove</p>
          <div className="flex flex-col gap-1">
            <a href="/" className="hover:text-gray-400 py-1  min-w-20">
              Home
            </a>
            <a href="/about" className="hover:text-gray-400 py-1  min-w-20">
              Why Us?
            </a>
            <a href="/service" className="hover:text-gray-400 py-1  min-w-20">
              Services
            </a>
            <a href="/team" className="hover:text-gray-400 py-1  min-w-20">
              Team
            </a>
          </div>
        </div>

        <div className="flex flex-col flex-wrap gap-3">
          <p className="font-bold text-xl md:text-2xl">Services</p>
          <div className="flex flex-col gap-1">
            {services.map((services, index) => (
              <a
                key={index}
                href="/service"
                className="hover:text-gray-400 py-1  min-w-20"
              >
                {services.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <hr className=" font-bold my-10" />
      <div className="flex justify-between flex-wrap gap-5">
        <p>Copyright © 2024 Alcove Architects. All rights reserved</p>
        <div className="flex gap-5">
          <div className="hover:text-gray-400 cursor-pointer">
            Terms & Condition
          </div>
          <div className="hover:text-gray-400 cursor-pointer">
            Privacy Policy
          </div>
        </div>
      </div>
    </div>
  );
}
