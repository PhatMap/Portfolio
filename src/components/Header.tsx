"use client"; 
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="flex justify-between items-center py-4  animate-slide-in-top sticky top-0 z-10">
      <div className="flex gap-2 font-bold cursor-pointer text-4xl">
        <Link className="text-amber-400"  href={'/'}>Phat</Link>
        <h1 className="text-amber-50">Tran</h1>
      </div>
      <nav className="flex gap-8 text-amber-50 font-semibold">
        {[
          { name: "Home", path: "/" },
          { name: "About", path: "/about" },
          { name: "Portfolio", path: "/portfolio" },
          { name: "Contact", path: "/contact" },
        ].map((link) => (
          <Link
            key={link.path}
            href={link.path}
            className={`${
              pathname === link.path
                ? "text-amber-400"
                : "text-amber-50"
            } transition-all duration-300 hover:text-amber-400`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
