import React from "react";
import download from "../assets/download.png";
import { LinearGradient } from "react-text-gradients";

const content = [
  {
    a: "For Account Opening, AMC & Platform Fees",
    b: "Open Your Free account with zero AMC or Platform Fees",
    rs: "0",
  },
  {
    a: "For Account Opening, AMC & Platform Fees",
    b: "Open Your Free account with zero AMC or Platform Fees",
    rs: "0",
  },
  {
    a: "For Account Opening, AMC & Platform Fees",
    b: "Open Your Free account with zero AMC or Platform Fees",
    rs: "20",
  },
  {
    a: "For Account Opening, AMC & Platform Fees",
    b: "Open Your Free account with zero AMC or Platform Fees",
    rs: "20",
  },
];

export default function Prices() {
  return (
    <div className="text-white">
      <h1 className="text-center font-bold text-3xl my-10">
        Experience More at{" "}
        <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
          Industry Standard Prices
        </LinearGradient>{" "}
      </h1>

      <div className="flex gap-10 mx-10">
        {content.map((e, i) => (
          <div
            key={i}
            className="border box-shadow rounded border-purple-400 px-6 py-4"
          >
            <h1 className="text-xl mt-4 mb-2 font-semibold">{e.a}</h1>
            <p className="font-medium text-[#ffffff9e]">{e.b}</p>
            <div>
              <p className="text-right text-purple-500 text-shadow text-4xl font-semibold my-5">
                <span className="text-sm">₹</span>
                {e.rs}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
