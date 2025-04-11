import { ModeToggle } from "./ModeToggle";
import Link from "next/link";
import { SquareUserRound } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DasboardBtn from "./DasboardBtn";

function Navbar() {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* Left side logo */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
        >
          <SquareUserRound className="size-8 text-emerald-500"/>
          <span className="animate-text bg-gradient-to-r from-[#ec4899] via-[#f59e0b] to-[#0ea5e9] bg-clip-text text-transparent drop-shadow-md">
            IntraVia
          </span>
        </Link>

        {/* right side actions */}
        <SignedIn>
          <div className="flex items-center space-x-4 ml-auto">
            <DasboardBtn />
            <ModeToggle />
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </nav>
  );
}

export default Navbar;
