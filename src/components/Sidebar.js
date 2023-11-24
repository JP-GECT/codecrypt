import Link from "next/link";

import { Home, User, GraduationCap, Gem } from "lucide-react";

const Sidebar = () => {
  return (
    <div className="bg-green-300 h-screen w-[100%]">
      <ul className="flex flex-col justify-start items-start">
        <li className="p-4">
          <Link
            href="/"
            className="flex justify-center items-center gap-2"
          >
            <Home />
            Home
          </Link>
        </li>
        <li className="p-4">
          <Link
            href="/userinfo"
            className="flex justify-center items-center gap-2"
          >
            <User /> User Info
          </Link>
        </li>
        <li className="p-4">
          <Link
            href="/advanced"
            className="flex justify-center items-center gap-2"
          >
            <Gem />
            Advanced
          </Link>
        </li>
        <li className="p-4">
          <Link
            href="/education"
            className="flex justify-center items-center gap-2"
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
