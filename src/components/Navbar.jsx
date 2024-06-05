import React from "react";
const links = [
  "Products",
  "Investments",
  "Markets",
  "Mutual Funds",
  "Pricing",
  "Support",
];

export default function Navbar() {
  return (
    <div className="fixed top-0 z-20 w-full text-white">
      <div className="flex backdrop-blur-xl w-full items-center justify-between px-10 py-5">
        <div>
          <a href="#" className="font-dancing text-shadow text-3xl">
            Detracapital
          </a>
        </div>
        <div className="flex gap-6">
          {links.map((e, i) => (
            <a
              href=""
              className="flex text-[#ffffffb3] hover:text-white items-center gap-2"
            >
              {e}
              <i className="fa-solid fa-angle-down"></i>
            </a>
          ))}
        </div>
        <div className="flex gap-10">
          <button className="border border-slate-100 rounded-lg px-4 py-1">
            Login
          </button>
          <button className="bg-purple-500 font-semibold box-shadow px-4 py-1 rounded-lg">
            Open Account
          </button>
        </div>
      </div>
    </div>
  );
}
