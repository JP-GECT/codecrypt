"use client";

import Sidebar from "@/components/Sidebar";

export default function SideLayout({ children }) {
  return (
    <div className="flex">
      <div className="w-[15%] bg-red-400 h-full">
        <Sidebar />
      </div>
      <main>{children}</main>
    </div>
  );
}
