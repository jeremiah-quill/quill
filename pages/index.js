import Head from "next/head";
import { RolloverText } from "react-jqui";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col max-w-4xl mx-auto gap-8 ">
      <RolloverText
        text="Unnecessary UI"
        classNames={"text-6xl cursor-pointer font-[dynapuff]"}
        fadeOutTime={10000}
        primaryColor="white"
      />
      <Link href="/features">
        <h1 className="text-3xl font-[dynapuff] group cursor-pointer">
          <span className="group-hover:text-[dodgerblue] group-hover:font-extrabold transition-all">
            EXPLORE
          </span>
        </h1>
      </Link>
    </div>
  );
}
