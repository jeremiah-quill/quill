import Head from "next/head";

export default function Home() {
  return (
    <div className="w-full h-full flex justify-center items-center">
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
      <h1 className="text-5xl font-[dynapuff] group cursor-pointer">
        Q
        <span className="group-hover:text-[dodgerblue] group-hover:font-extrabold transition-all">
          UI
        </span>
        LL
      </h1>
    </div>
  );
}
