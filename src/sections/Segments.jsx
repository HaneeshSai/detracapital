import React from "react";

const elemets = [
  {
    img: "https://stock-logos.dhan.co/static-openweb/equi.svg",
    name: "Stocks",
  },
  {
    img: "https://stock-logos.dhan.co/static-openweb/cepe.svg",
    name: "Options",
  },
  {
    img: "https://stock-logos.dhan.co/static-openweb/equi.svg",
    name: "Stocks",
  },
  {
    img: "https://stock-logos.dhan.co/static-openweb/equi.svg",
    name: "Stocks",
  },
  {
    img: "https://stock-logos.dhan.co/static-openweb/equi.svg",
    name: "Stocks",
  },
  {
    img: "https://stock-logos.dhan.co/static-openweb/equi.svg",
    name: "Stocks",
  },
  {
    img: "https://stock-logos.dhan.co/static-openweb/equi.svg",
    name: "Stocks",
  },
  {
    img: "https://stock-logos.dhan.co/static-openweb/equi.svg",
    name: "Stocks",
  },
  {
    img: "https://stock-logos.dhan.co/static-openweb/equi.svg",
    name: "Stocks",
  },
];

export default function Segments() {
  return (
    <div className="text-white flex flex-col gap-8 my-36 items-center">
      <h1 className="text-center text-3xl font-bold">
        One Trading App for All Segmets
      </h1>
      <div className="flex gap-8">
        {elemets.map((e, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 border border-[#8c2cc835] hover:border-[#A020F0] box-shadow px-5 rounded-lg py-3 items-center"
          >
            <img src={e.img} alt="" className="h-10" />
            <p className="font-medium text-lg">{e.name}</p>
          </div>
        ))}
      </div>
      <p className="font-medium mt-4">
        The Only Online Trading app you ever need to fulfil your financial
        goals, right from investing in mutal funts to trading in F&O!
      </p>
    </div>
  );
}
