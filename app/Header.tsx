import React from "react";
import Link from "next/link";

interface Props {}

function Header(props: Props) {
  const {} = props;

  return (
    <header className="w-screen p-6 bg-slate-300">
      <h2 className="text-center">I am the header</h2>
      <div className="flex gap-2">
        <Link href="/" className="p-4 bg-blue-400 text-white rounded-lg">
          Home
        </Link>
        <Link href="/todos" className="p-4 bg-blue-400 text-white rounded-lg">
          Todos
        </Link>
      </div>
    </header>
  );
}

export default Header;
