import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-200">
      <Link href="/userinfo">
        <button className="bg-blue-500 text-white p-4 rounded-[20px]">
          Get Started
        </button>
      </Link>
    </div>
  );
}
