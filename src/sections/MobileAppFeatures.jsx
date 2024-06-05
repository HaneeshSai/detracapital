import React, { useState } from "react";
import { LinearGradient } from "react-text-gradients";
const options = [
  {
    name: "Advanced Option Chain",
    desc: "Trade calls and puts directly from the Option Chain while you analyze risk with Greeks. This is a beloved feature on our trading app that helps you execute trades with precision and ease of swift execution!",
    btnImg: "https://stock-logos.dhan.co/static-openweb/oc.svg",
    mainImg:
      "https://stock-logos.dhan.co/static-new-images/advancedoptionappscreen.png",
  },
  {
    name: "Trading View Charts",
    desc: "Place orders for Stocks, Futures, Options, Commodities, and Currencies directly from charts on our mobile trading app. We've ensured that you get access to technical indicators, multiple chart timeframes, and more for free!",
    btnImg: "https://stock-logos.dhan.co/static-new-images/TradingView.svg",
    mainImg:
      "https://stock-logos.dhan.co/static-new-images/nifftytradingviewappscreen.png",
  },
  {
    name: "Trading View Charts",
    desc: "Place orders for Stocks, Futures, Options, Commodities, and Currencies directly from charts on our mobile trading app. We've ensured that you get access to technical indicators, multiple chart timeframes, and more for free!",
    btnImg: "https://stock-logos.dhan.co/static-new-images/TradingView.svg",
    mainImg:
      "https://stock-logos.dhan.co/static-new-images/nifftytradingviewappscreen.png",
  },
  {
    name: "Trading View Charts",
    desc: "Place orders for Stocks, Futures, Options, Commodities, and Currencies directly from charts on our mobile trading app. We've ensured that you get access to technical indicators, multiple chart timeframes, and more for free!",
    btnImg: "https://stock-logos.dhan.co/static-new-images/TradingView.svg",
    mainImg:
      "https://stock-logos.dhan.co/static-new-images/nifftytradingviewappscreen.png",
  },
  {
    name: "Trading View Charts",
    desc: "Place orders for Stocks, Futures, Options, Commodities, and Currencies directly from charts on our mobile trading app. We've ensured that you get access to technical indicators, multiple chart timeframes, and more for free!",
    btnImg: "https://stock-logos.dhan.co/static-new-images/TradingView.svg",
    mainImg:
      "https://stock-logos.dhan.co/static-new-images/nifftytradingviewappscreen.png",
  },
  {
    name: "Trading View Charts",
    desc: "Place orders for Stocks, Futures, Options, Commodities, and Currencies directly from charts on our mobile trading app. We've ensured that you get access to technical indicators, multiple chart timeframes, and more for free!",
    btnImg: "https://stock-logos.dhan.co/static-new-images/TradingView.svg",
    mainImg:
      "https://stock-logos.dhan.co/static-new-images/nifftytradingviewappscreen.png",
  },
  {
    name: "Trading View Charts",
    desc: "Place orders for Stocks, Futures, Options, Commodities, and Currencies directly from charts on our mobile trading app. We've ensured that you get access to technical indicators, multiple chart timeframes, and more for free!",
    btnImg: "https://stock-logos.dhan.co/static-new-images/TradingView.svg",
    mainImg:
      "https://stock-logos.dhan.co/static-new-images/nifftytradingviewappscreen.png",
  },
  {
    name: "Trading View Charts",
    desc: "Place orders for Stocks, Futures, Options, Commodities, and Currencies directly from charts on our mobile trading app. We've ensured that you get access to technical indicators, multiple chart timeframes, and more for free!",
    btnImg: "https://stock-logos.dhan.co/static-new-images/TradingView.svg",
    mainImg:
      "https://stock-logos.dhan.co/static-new-images/nifftytradingviewappscreen.png",
  },
];

export default function MobileAppFeatures() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="text-white">
      <h1 className="text-center flex items-center gap-3 justify-center text-3xl font-bold">
        <lord-icon
          src="https://cdn.lordicon.com/osckrizz.json"
          trigger="hover"
          style={{ width: 50, height: 50 }}
        ></lord-icon>
        Building The Features Which{" "}
        <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
          Traders Love the Most!
        </LinearGradient>{" "}
      </h1>

      <div className="flex items-center gap-10 my-5 mx-[150px]">
        <img src={options[selected].mainImg} className=" h-[600px]" alt="" />
        <div className="">
          <h1 className="text-2xl mb-4 items-center font-semibold flex gap-3">
            <img src={options[selected].btnImg} alt="" />
            {options[selected].name}{" "}
            <span className="text-sm flex items-center font-medium px-2 h-8 rounded-md border bg-[#b543de1f] border-[#b543de63]">
              Realtime
            </span>
          </h1>
          <p>{options[selected].desc}</p>
          <div className="grid gap-5 mt-5 grid-cols-4">
            {options.map((f, j) => (
              <div
                onClick={() => {
                  setSelected(j);
                }}
                key={j}
                className={`flex cursor-pointer text-center text-sm flex-col gap-2 border ${
                  j === selected ? "box-shadow-selected border-[#A020F0]" : null
                } border-[#8c2cc835] hover:border-[#A020F0] box-shadow px-1.5 rounded-lg py-4 items-center`}
              >
                <img src={f.btnImg} alt="" />
                <p>{f.name}</p>
              </div>
            ))}
          </div>
          <button className=" w-[200px] mt-5 text-center flex gap-5 items-center font-semibold bg-purple-500 px-4 py-2 rounded-md my-3">
            Start Trading<i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
