import { GradientText } from "react-jqui";
import { useState } from "react";
import Head from "next/head";

export default function GradientTextPage() {
  const [fromColor, setFromColor] = useState("#ffffff");
  const [toColor, setToColor] = useState("#000000");
  const [angle, setAngle] = useState(90);
  const [text, setText] = useState(
    "Cillum id aliqua elit est tempor laboris aliquip minim eiusmod magna quis elit. Amet et dolor laboris incididunt veniam. Laboris commodo nisi exercitation sit deserunt mollit qui sunt elit exercitation et."
  );

  return (
    <div className="p-16 bg-black w-full min-h-screen">
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
      <div className="mx-auto max-w-5xl grid gap-8">
        <div>
          <label className="text-white block mb-2" htmlFor="color-start">
            Color start:
          </label>
          <input type="color" value={fromColor} onChange={(e) => setFromColor(e.target.value)} />
        </div>
        <div>
          <label className="text-white block mb-2" htmlFor="color-stop">
            Color stop:
          </label>
          <input type="color" value={toColor} onChange={(e) => setToColor(e.target.value)} />
        </div>
        <div>
          <label className="text-white block" htmlFor="gradient-angle">
            Linear gradient angle: {angle} degrees
          </label>
          <input
            type="range"
            value={angle}
            min="0"
            max="360"
            step="5"
            id="gradient-angle"
            name="gradient-angle"
            onChange={(e) => {
              setAngle(e.target.value);
            }}
          />
        </div>
        <div>
          <textarea
            className="p-4 rounded-md w-full h-[100px]"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <GradientText
          fromColor={fromColor}
          toColor={toColor}
          angle={angle}
          classNames="text-[100px] font-bold">
          {text}
        </GradientText>
      </div>
    </div>
  );
}
