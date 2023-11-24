import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-green-300 h-screen w-[100%]">
      <ul className="flex flex-col justify-start items-start">
        <li className="p-4">
          <Link href="/">Home</Link>
        </li>
        <li className="p-4">
          <Link href="/userinfo">User Info</Link>
        </li>
        <li className="p-4">
          <Link href="/advanced">Advanced</Link>
        </li>
        <li className="p-4">
          <Link href="/education">Education</Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
