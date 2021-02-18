import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between items-center px-2 py-5 shadow-md bg-white sticky top-0 z-50">
      <Link href="/">
        <h1 className="text-2xl font-normal cursor-pointer">Jambonz</h1>
      </Link>
      <nav>
        <ul className="flex flex-row items-center mt-4 sm:mt-0">
          <li className="font-medium mx-2 sm:mx-4 cursor-pointer">
            <Link href="/pricing">Pricing</Link>
          </li>
          <li className="font-medium mx-2 sm:mx-4 cursor-pointer">Docs</li>
          <li className="font-medium mx-2 sm:mx-4 cursor-pointer">Register</li>
          <li className="font-medium mx-2 sm:mx-4 cursor-pointer">Sign In</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
