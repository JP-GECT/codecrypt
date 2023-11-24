import Hero from "@/components/Hero";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-200">
      <Hero />
    </div>
  );
}
