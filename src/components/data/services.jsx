import { BsBuildings, BsGraphUpArrow } from "react-icons/bs";
import { FaClockRotateLeft, FaMagnifyingGlass } from "react-icons/fa6";
import { GiReceiveMoney } from "react-icons/gi";
import { GoPeople } from "react-icons/go";
import { GrGroup, GrMoney } from "react-icons/gr";
import { IoIosStarOutline } from "react-icons/io";
import { IoBuildOutline } from "react-icons/io5";
import { LuNetwork, LuTrees } from "react-icons/lu";
import {
  MdOutlineAssuredWorkload,
  MdOutlineDesignServices,
} from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

export const services = [
  {
    id: 1,
    title: "Architectural Design",
    desc: "Creating innovative architectural designs tailored",
    image:
      "https://images.unsplash.com/photo-1496564203457-11bb12075d90?q=80&w=1900&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://plus.unsplash.com/premium_photo-1679582754705-0b8fc5b86042?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    more: "At Alcove Architects, we specialize in creating innovative architectural designs tailored to meet the unique needs and aspirations of our clients. Our design process involves meticulous planning, creative brainstorming, and attention to detail to bring visions to life. Whether it's designing a contemporary home, a commercial complex, or a cultural institution, we strive to blend functionality with aesthetics, ensuring that every space we create is not only visually striking but also highly functional and sustainable. Our team of experienced architects and designers works closely with clients to understand their requirements, preferences, and goals, translating them into architectural masterpieces that exceed expectations and stand the test of time.",
    benefit: [
      "Tailored Solutions",
      "Innovative Concepts",
      "Attention to Detail",
      "Sustainable Solutions",
    ],
    icon: [
      <RiCustomerService2Fill />,
      <LuNetwork />,
      <FaMagnifyingGlass />,
      <LuTrees />,
    ],
  },
  {
    id: 2,
    title: "Interior Design",
    desc: "Transform your space into a captivating and functional environment",
    image:
      "https://images.unsplash.com/photo-1503174971373-b1f69850bded?q=80&w=1826&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    more: "Transform your space into a captivating and functional environment with our comprehensive interior design services. At Alcove Architects, we understand the power of interior design in shaping the way we live, work, and interact with our surroundings. Our team of talented designers combines creativity, innovation, and technical expertise to curate beautiful interiors that reflect our clients' individual tastes and lifestyles. From concept development to final execution, we work closely with clients to understand their vision, preferences, and requirements, ensuring that every design decision aligns with their unique needs. Whether it's a residential space, a commercial office, or a hospitality establishment, we strive to create interiors that not only look stunning but also enhance the quality of life and foster a sense of well-being.",
    benefit: [
      "Personalized Designs",
      "Functional Spaces",
      "Client-Centric Approach",
      "Enhanced Well-being",
    ],
    icon: [
      <MdOutlineDesignServices />,
      <IoBuildOutline />,
      <GoPeople />,
      <BsGraphUpArrow />,
    ],
  },
  {
    id: 3,
    title: "Urban Planning",
    desc: "Create sustainable communities through thoughtful and strategic design solutions",
    image:
      "https://images.unsplash.com/photo-1504682139054-6c62dd226409?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://images.unsplash.com/photo-1576580349568-d510cd92186a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    more: "Create sustainable communities through thoughtful and strategic urban planning solutions. At Alcove Architects, we believe in the power of design to shape the built environment and improve the quality of life for residents. Our urban planning services focus on creating vibrant, livable communities that promote social equity, economic prosperity, and environmental sustainability. From mixed-use developments to transit-oriented neighborhoods, we work closely with governments, developers, and communities to develop comprehensive plans that address their unique challenges and opportunities. Our approach combines data-driven analysis, community engagement, and innovative design strategies to create resilient, inclusive, and environmentally-friendly urban spaces that stand the test of time.",
    benefit: [
      "Sustainable Communities",
      "Social Equity",
      "Economic Prosperity",
      "Resilient Urban Spaces",
    ],
    icon: [<LuTrees />, <GrGroup />, <GiReceiveMoney />, <BsBuildings />],
  },
  {
    id: 4,
    title: "Build Management",
    desc: "Coordinate contractors, manage resources, and oversee on-site activities",
    image:
      "https://images.unsplash.com/photo-1429497419816-9ca5cfb4571a?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    image2:
      "https://images.unsplash.com/photo-1615461475394-4fe1a18c7111?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    more: "Ensure the successful execution of your construction projects with our comprehensive build management services. At Alcove Architects, we understand the complexities involved in construction projects, from coordinating contractors to managing resources and overseeing on-site activities. Our experienced project managers provide end-to-end support, from project inception to completion, ensuring that every aspect of the construction process is handled efficiently and effectively. We leverage our industry expertise, technical knowledge, and strategic partnerships to deliver projects on time, within budget, and to the highest quality standards. Whether it's a residential development, a commercial complex, or an infrastructure project, you can trust us to manage your build with precision and professionalism.",
    benefit: [
      "Efficient Project Execution",
      "Budget Management",
      "Quality Assurance",
      "Professionalism",
    ],
    icon: [
      <FaClockRotateLeft />,
      <GrMoney />,
      <MdOutlineAssuredWorkload />,
      <IoIosStarOutline />,
    ],
  },
];
