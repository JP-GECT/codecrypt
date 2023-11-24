import Link from "next/link";

import { Home, User, GraduationCap, Gem, Wallet } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-[#4b42ff]  h-screen w-[100]">
      <div className="flex justify-around items-center">
        <Wallet className="h-8 w-8" />
        <h1 className="text-center text-[25px] p-5 text-white font-bold">
          InvestHere
        </h1>
      </div>
      <ul className="flex flex-col justify-start items-start">
        <li className="p-4 hover:bg-blue-800 w-full">
          <Link
            href="/"
            className="flex text-white text-lg font-medium justify-start items-center gap-2 "
          >
            <Home className="text-white" />
            Home
          </Link>
        </li>
        <li className="p-4 hover:bg-blue-800 w-full">
          <Link
            href="/userinfo"
            className="flex justify-start  items-center gap-2 text-white text-lg font-medium "
          >
            <User /> User Info
          </Link>
        </li>
        <li className="p-4 hover:bg-blue-800 w-full ">
          <Link
            href="/advanced"
            className="flex justify-start items-center gap-2 text-white text-lg font-medium "
          >
            <Gem />
            Advanced
          </Link>
        </li>
        <li className="p-4 hover:bg-blue-800 w-full">
          <Link
            href="/education"
            className="flex justify-start  items-center gap-2 text-white text-lg font-medium"
          >
            <GraduationCap />
            Education
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
