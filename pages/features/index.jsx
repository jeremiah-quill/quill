import Link from "next/link";

export default function FeaturesPage() {
  return (
    <div className="flex justify-center pt-16">
      <div>
        <h1 className="text-6xl font-bold font-[dynapuff] text-center mb-8">Current Creations</h1>
        <ul className="flex flex-col items-start">
          <li className="text-3xl font-bold hover:bg-blue-700 transition-all px-2 py-1">
            <Link href="/features/rollover-text">Rollover Text</Link>
          </li>
          <li className="text-3xl font-bold hover:bg-blue-700 transition-all px-2 py-1">
            <Link href="/features/slider-input">Slider Input</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
