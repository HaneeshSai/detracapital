import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { LinearGradient } from "react-text-gradients";

const scrips = ["HDFC", "TCS", "Reliance Industries", "HUL", "Infosys", "TATA"];

export default function Hero() {
  return (
    <>
      <div className="flex items-center heroimg gap-10 px-20">
        <div className="text-white my-32">
          <div>
            <h1 className="text-5xl font-semibold">
              <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
                Trading
              </LinearGradient>{" "}
              Made Easy for you.
            </h1>
            <h1 className="text-4xl mt-2 font-semibold">
              Start Your Trading Journey now
            </h1>
            <h1 className="text-4xl mt-2 font-bold">
              By Investing in{" "}
              <span className="text-[#8831c7] font-bold text-shadow">
                <Typewriter
                  loop={true}
                  words={[
                    "Stocks.",
                    "EFTs.",
                    "Mutual Funds.",
                    "Currency.",
                    "Crypto.",
                    "Commodity.",
                    "Future.",
                  ]}
                />
              </span>
            </h1>
          </div>
          <div className="flex mt-10 gap-10">
            <div className="flex gap-5 pl-5">
              <div className="bg-gradient-to-b from-transparent via-purple-500 to-transparent h-full w-[2px]"></div>
              <div>
                <p className="font-medium text-[#ffffff9a]">Best for</p>
                <h1 className="text-2xl font-semibold">Super Traders</h1>
              </div>
            </div>
            <div className="flex gap-5 pl-5">
              <div className="bg-gradient-to-b from-transparent via-purple-500 to-transparent h-full w-[2px]"></div>
              <div>
                <p className="font-medium text-[#ffffff9a]">Built for</p>
                <h1 className="text-2xl font-semibold">Long Term Investors</h1>
              </div>
            </div>
          </div>
          <div className="border-[1px] my-9 border-[#ffffff40] bg-[#ffffff16] rounded-xl px-8 py-2  flex gap-3 items-center">
            <i className="fa-brands text-xl fa-searchengin"></i>
            <input
              type="text"
              className="bg-[#fff0] w-full outline-none font-semibold"
              placeholder="Search for a script you intend to Invest in"
            />
          </div>
          <div className="flex gap-7 my-5 items-center">
            {scrips.map((e, i) => (
              <p
                key={i}
                className="px-3 py-1 hover:text-white hover:bg-[#ffffff13] border text-[#ffffff78] border-[#ffffff2d] rounded cursor-pointer text-sm"
              >
                {e}
              </p>
            ))}
          </div>
          <p className="font-medium my-5">
            Open your <span className="text-purple-600">FREE</span> demat
            account now in just a few clicks!
          </p>
          <button className="text-xl flex gap-5 items-center font-semibold bg-purple-300 text-black px-4 py-2 rounded-md my-10">
            START NOW<i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}
