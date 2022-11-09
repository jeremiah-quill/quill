import Head from "next/head";
import HighlightedText from "../components/HighlightedText";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center flex-col max-w-4xl mx-auto gap-8 ">
      <Head>
        <title>QUILL - just another React UI library</title>
        <meta name="description" content="Just another React UI library" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=DynaPuff:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Link href="/features">
        {/* <a> */}
        <h1 className="text-5xl font-[dynapuff] group cursor-pointer">
          Q
          <span className="group-hover:text-[dodgerblue] group-hover:font-extrabold transition-all">
            UI
          </span>
          LL
        </h1>
        {/* </a> */}
      </Link>
      <HighlightedText
        text="Just another React UI library"
        classNames={"text-3xl cursor-pointer font-[dynapuff]"}
        fadeOutTime={"5000"}
        colors={[]}
      />
    </div>
  );
}
