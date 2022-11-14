import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";

export default function Header() {
  return (
    <header className="text-white font-[dynapuff] p-4 text-xl flex justify-between">
      <Link href="/">Unnecessary UI</Link>
      <Link href="https://github.com/jeremiah-quill/unnecessary-ui" target="_blank">
        <AiFillGithub className="text-3xl" />
      </Link>
    </header>
  );
}
