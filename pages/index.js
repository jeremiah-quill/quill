import Head from "next/head";
import HighlightedText from "../components/HighlightedText";
import Link from "next/link";
import { useState } from "react";
import uuid from "react-uuid";

export default function Home() {
  const [fadeOutTime, setFadeOutTime] = useState(10000);
  const [colors, setColors] = useState([
    { color: "#3b82f6", id: uuid() },
    { color: "#22c55e", id: uuid() },
    { color: "#eab308", id: uuid() },
    { color: "#ef4444", id: uuid() },
    { color: "#f97316", id: uuid() },
    { color: "#a855f7", id: uuid() },
    { color: "#ec4899", id: uuid() },
    { color: "#6366f1", id: uuid() },
  ]);

  function updateColors(id, newColor) {
    setColors(colors.map((color) => (color.id === id ? { ...color, color: newColor } : color)));
  }

  function deleteColor(id) {
    setColors(colors.filter((color) => color.id !== id));
  }

  function addColor() {
    setColors([...colors, { color: "#ffffff", id: uuid() }]);
  }
  return (
    // <div className="w-full h-full flex justify-center items-center flex-col max-w-4xl mx-auto gap-8 ">
    <div className="p-16 grid gap-8 bg-black h-full w-full">
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
      {/* <Link href="/features">
        <h1 className="text-5xl font-[dynapuff] group cursor-pointer">
          Q
          <span className="group-hover:text-[dodgerblue] group-hover:font-extrabold transition-all">
            UI
          </span>
          LL
        </h1>
      </Link>
      <HighlightedText
        text="Just another React UI library"
        classNames={"text-3xl cursor-pointer font-[dynapuff]"}
        fadeOutTime={10000}
        primaryColor="black"
      /> */}
      <div className="mx-auto max-w-5xl grid gap-8">
        <div className="grid gap-4">
          <div>
            <h1 className="text-white mb-2">Choose color palette: </h1>
            <ul className="flex gap-4 items-center">
              {colors.map((color) => (
                <li className="flex flex-col justify-center items-center" key={color.id}>
                  <button
                    onClick={() => deleteColor(color.id)}
                    className="text-white text-sm px-2 py-1 bg-red-500">
                    Remove
                  </button>
                  <input
                    className="w-full cursor-pointer"
                    type="color"
                    value={color.color}
                    onChange={(e) => updateColors(color.id, e.target.value)}
                  />
                </li>
              ))}
              <button className="text-white px-4 py-1 bg-green-500" onClick={() => addColor()}>
                Add
              </button>
            </ul>
          </div>
          <div className="">
            <label className="text-white mb-2 block" htmlFor="fade-duration">
              Apply fade out duration: {fadeOutTime} ms
            </label>
            <input
              type="range"
              value={fadeOutTime}
              id="fade-duration"
              name="fade-duration"
              min="100"
              max="15000"
              onChange={(e) => {
                setFadeOutTime(e.target.value);
              }}
            />
          </div>
        </div>
        <HighlightedText
          classNames="text-5xl cursor-pointer"
          text="Tempor pariatur officia consequat aliquip. Aliquip ea consectetur veniam tempor. Ullamco laborum proident magna aliquip minim do culpa velit adipisicing aliqua elit deserunt sunt eu. Reprehenderit anim amet nisi voluptate voluptate consequat deserunt qui in ipsum. Magna eu do voluptate culpa do duis pariatur officia nisi culpa nulla est. Duis duis labore fugiat velit ex deserunt reprehenderit sint nisi mollit aliqua. Adipisicing laboris nulla in cupidatat deserunt in cupidatat aliqua excepteur ad ipsum."
          fadeOutTime={fadeOutTime}
          primaryColor="white"
          colors={colors.map((color) => color.color)}
        />
      </div>
    </div>
  );
}
