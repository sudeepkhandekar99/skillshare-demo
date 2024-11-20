"use client";

import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
    const router = useRouter();
    const pathname = usePathname();

    // Check if the current page is signin or signup
    const isAuthPage = pathname === "/signin" || pathname === "/signup";

    return (
        <nav className="flex items-center justify-between bg-black p-4 text-white">
            {/* Logo */}
            <div className="text-2xl font-bold">
                <button onClick={() => router.push("/")} className="text-white">
                    <span className="font-bold">Skill</span>
                    <span className="font-light">Share</span>
                    <span className="font-bold">.</span>
                </button>
            </div>

            {/* Navigation Links */}
            <div className="space-x-4">
                {isAuthPage ? (
                    <>
                        <button
                            className="text-lg hover:text-gray-400"
                            onClick={() => router.push("/signin")}
                        >
                            Sign In
                        </button>
                        <button
                            className="text-lg hover:text-gray-400"
                            onClick={() => router.push("/signup")}
                        >
                            Sign Up
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="text-lg hover:text-gray-400"
                            onClick={() => router.push("/feed")}
                        >
                            Feed
                        </button>
                        <button
                            className="text-lg hover:text-gray-400"
                            onClick={() => router.push("/profile")}
                        >
                            Profile
                        </button>
                        <button
                            className="text-lg hover:text-gray-400"
                            onClick={() => router.push("/signin")}
                        >
                            Logout
                        </button>
                    </>
                )}
            </div>
        </nav>
    );
}
