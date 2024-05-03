import { AiOutlineTeam } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoIosStarOutline } from "react-icons/io";
import { IoBookOutline, IoLeafOutline } from "react-icons/io5";
import { LuBrain, LuTrees } from "react-icons/lu";
import { MdWorkOutline } from "react-icons/md";
import { TbGavel } from "react-icons/tb";

export const teams = [
  {
    name: "Michael Reynolds",
    position: "Founder & Principal Architect",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    work: "Michael oversees the conceptualization and design of each project, ensuring that Alcove Architects delivers exceptional architectural solutions.",
  },
  {
    name: "Sarah Chen",
    position: "Design Director",
    imageUrl:
      "https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    work: "Sarah leads the design team in translating clients' visions into reality, creating spaces that are both functional and aesthetically pleasing.",
  },
  {
    name: "David Thompson",
    position: "Sustainability Director",
    imageUrl:
      "https://images.unsplash.com/photo-1645830166230-187caf791b90?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    work: "David ensures that sustainability is at the forefront of every project, implementing green building practices and technologies to minimize environmental impact.",
  },
  {
    name: "Emily Patel",
    position: "Operations Manager",
    imageUrl:
      "https://images.unsplash.com/photo-1655249481446-25d575f1c054?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    work: "Emily manages the administrative and operational aspects of Alcove Architects, optimizing processes and resources to support the team's projects.",
  },
];

export const culture = [
  {
    aspect: "Collaborative Spirit",
    desc: "We foster a collaborative environment where creativity thrives and ideas flourish.",
    benefits: [
      "Encourages open communication and teamwork",
      "Harnesses collective intelligence for innovative solutions",
    ],
    icon: <FaRegHeart />,
  },
  {
    aspect: "Continuous Learning",
    desc: "We believe in the power of continuous learning and professional development.",
    benefits: [
      "Keeps us updated on industry trends",
      "Refines our skills for better performance",
      "Provides cutting-edge solutions to clients",
    ],
    icon: <IoBookOutline />,
  },
  {
    aspect: "Client-Centric Approach",
    desc: "At the heart of our culture is a commitment to our clients' success.",
    benefits: [
      "Prioritizes understanding clients' needs and goals",
      "Tailors solutions to exceed client expectations",
      "Delivers exceptional service at every project stage",
    ],
    icon: <MdWorkOutline />,
  },
  {
    aspect: "Environmental Responsibility",
    desc: "Environmental responsibility is a core value that informs everything we do.",
    benefits: [
      "Integrates sustainable practices into designs",
      "Minimizes environmental impact",
      "Promotes well-being and harmony with nature",
    ],
    icon: <IoLeafOutline />,
  },
];

export const values = [
  {
    name: "Innovation",
    description:
      "We embrace innovation and creativity in everything we do, striving to push boundaries and explore new possibilities.",
    icon: <LuBrain />,
    imageUrl:
      "https://plus.unsplash.com/premium_photo-1672423156600-7046441ff048?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Integrity",
    description:
      "Integrity is the foundation of our actions. We uphold honesty, transparency, and ethical conduct in all our dealings.",
    icon: <TbGavel />,
    imageUrl:
      "https://images.unsplash.com/photo-1563818785891-5e953f985e29?q=80&w=1910&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Excellence",
    description:
      "We pursue excellence relentlessly, setting high standards for ourselves and delivering exceptional quality in every project.",
    icon: <IoIosStarOutline />,
    imageUrl:
      "https://images.unsplash.com/photo-1615472669810-e72da447b314?q=80&w=1949&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Collaboration",
    description:
      "Collaboration is at the heart of our success. We value teamwork, diversity, and inclusivity, working together towards shared goals.",
    icon: <AiOutlineTeam />,
    imageUrl:
      "https://images.unsplash.com/photo-1579389083395-4507e98b5e67?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Sustainability",
    description:
      "We are committed to sustainability, integrating eco-friendly practices into our designs to minimize environmental impact and promote a greener future.",
    icon: <LuTrees />,
    imageUrl:
      "https://images.unsplash.com/photo-1693652758589-c419bd2c47de?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

export const jobDesc = {
  1: "Lead architectural projects from concept to completion. Produce detailed drawings and ensure compliance with regulations.",
  2: "Create interior design concepts, select furniture, and oversee project implementation.",
  3: "Develop urban planning strategies, engage stakeholders, and design sustainable environments.",
  4: "Plan and oversee architectural projects within budget and schedule. Manage project teams and resolve conflicts.",
  5: "Develop sustainable design strategies, implement eco-friendly principles, and monitor project performance.",
  6: "Produce CAD drawings, maintain standards, and collaborate with project teams.",
  7: "Develop marketing strategies, create materials, manage social media, and analyze performance.",
  8: "Analyze financial data, prepare reports, monitor project costs, and support decision-making.",
};

export const position = {
  1: "Architect",
  2: "Interior Designer",
  3: "Urban Planner",
  4: "Project Manager",
  5: "Sustainability Specialist",
  6: "CAD Technician",
  7: "Marketing Coordinator",
  8: "Financial Analyst",
};
