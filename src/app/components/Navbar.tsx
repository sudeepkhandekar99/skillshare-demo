import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between bg-black p-4 text-white">
      {/* Logo */}
      <div className="text-2xl font-bold">
        <Link href="/">
          <span className="font-bold">Skill</span>
          <span className="font-light">Share</span>
          <span className="font-bold">.</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <div className="space-x-4">
        <Link href="/signin" className="text-lg hover:text-gray-400">
          Sign In
        </Link>
        <Link href="/signup" className="text-lg hover:text-gray-400">
          Sign Up
        </Link>
      </div>
    </nav>
  );
}
