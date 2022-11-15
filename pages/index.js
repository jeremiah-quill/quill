import Head from "next/head";
import { RolloverText, GradientText } from "react-jqui";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col max-w-5xl mx-auto gap-8 pt-16">
      <Head>
        <title>Unnecessary UI</title>
      </Head>
      <h1 className="gradient-text text-6xl font-bold font-inter text-center">
        A collection of unnecessary UI components built in React.
      </h1>

      <RolloverText
        text="Lightweight components and features that make people smile.  Add something unique without sacrificing performance or flexibility. Browse the docs or contribute to the project on GitHub."
        classNames={"text-xl cursor-pointer font-inter text-center max-w-2xl"}
        fadeOutTime={10000}
        primaryColor="white"
      />
      <Link href="/features">
        <h1 className="text-3xl font-[dynapuff] group cursor-pointer">
          <span className="group-hover:text-[goldenrod] group-hover:font-extrabold transition-all">
            EXPLORE
          </span>
        </h1>
      </Link>
    </div>
  );
}
