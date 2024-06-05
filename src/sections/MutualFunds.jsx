import React from "react";
import { LinearGradient } from "react-text-gradients";
const links = [
  {
    img: "https://dhan.co/_next/static/media/equity_funds.fcca6ec2.svg",
    name: "Equity Funds",
  },
  {
    img: "https://dhan.co/_next/static/media/Debt_Funds.5e1ef92e.svg",
    name: "Debt Funds",
  },
  {
    img: "https://dhan.co/_next/static/media/equity_funds.fcca6ec2.svg",
    name: "Equity Funds",
  },
  {
    img: "https://dhan.co/_next/static/media/equity_funds.fcca6ec2.svg",
    name: "Equity Funds",
  },
  {
    img: "https://dhan.co/_next/static/media/equity_funds.fcca6ec2.svg",
    name: "Equity Funds",
  },
];

export default function MutualFunds() {
  return (
    <div className="text-white flex mx-36 items-center gap-10 my-44">
      <div>
        <h1 className="text-3xl my-10 font-bold">
          Mutal Fund Investment at{" "}
          <LinearGradient gradient={["to left", "#17acff ,#ff68f0"]}>
            Detracapital
          </LinearGradient>{" "}
        </h1>
        <p className="my-3 font-medium">
          Invest at 0% commission in India's Top Mutual Funds. Import your
          existing mutual fund portfolio. Our exclusive feature - Track
          Outperformers from a mutual fund's portfolio and invest in them
          individually or via Baskets!
        </p>
        <div className="grid my-10 grid-cols-2 gap-y-5 gap-x-5">
          {links.map((e, i) => (
            <div className="flex gap-2 items-center ">
              <img src={e.img} className="h-8" alt="" />
              <p className="font-semibold text-xl">{e.name}</p>
              <i class="fa-solid fa-chevron-right"></i>
            </div>
          ))}
        </div>
        <button className="flex bg-purple-500 px-4 py-2 rounded-lg font-semibold gap-5 items-center">
          Invest in Mutual Funds<i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <img
        src="https://stock-logos.dhan.co/static-openweb/bottom1.png"
        alt=""
        className="h-[450px]"
      />
    </div>
  );
}
