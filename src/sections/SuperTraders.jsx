import React, { useEffect, useState } from "react";
import SlotCounter from "react-slot-counter";
const options = [
  {
    img: "https://stock-logos.dhan.co/static-openweb/homefold-13.svg",
    small: "Check Greeks & Trade from",
    big: "Advanced Option Chain",
  },
  {
    img: "https://stock-logos.dhan.co/static-openweb/homefold-14.svg",
    small: "Pledge Shares for",
    big: "Instant Margin Benefit",
  },
  {
    img: "https://stock-logos.dhan.co/static-openweb/homefold-15.svg",
    small: "Place",
    big: "Forever Orders with OCO",
  },
  {
    img: "https://stock-logos.dhan.co/static-openweb/homefold-16.svg",
    small: "Check Greeks & Trade from",
    big: "Advanced Option Chain",
  },
  {
    img: "https://stock-logos.dhan.co/static-openweb/homefold-17.svg",
    small: "Check Greeks & Trade from",
    big: "Advanced Option Chain",
  },
  {
    img: "https://stock-logos.dhan.co/static-openweb/homefold-18.svg",
    small: "Check Greeks & Trade from",
    big: "Advanced Option Chain",
  },
];

export default function SuperTraders() {
  const [value, setValue] = useState("₹4,65,362.00");
  const [startValue, setStartValue] = useState("₹4,64,975.48");

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("calling");
      setValue("₹4,64,975.48");
      setStartValue("₹4,65,362.00");
    }, 3000);

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="text-white flex mx-36 gap-10 my-36">
      <div className="flex-1">
        <h1 className="text-3xl  mb-5 font-semibold">
          Built for Super Traders.
        </h1>
        <p className="font-medium text-lg text-[#ffffffb5]">
          We're on a mission to elevate your online trading experience by
          building features that are most useful to you!
        </p>
        <div className="grid my-10 grid-cols-2 gap-5">
          {options.map((e, i) => (
            <div key={i} className="flex gap-5 items-center">
              <div className="w-10">
                <img className="h-7" src={e.img} alt="" />
              </div>
              <div>
                <p className="text-sm font-medium text-[#ffffffae]">
                  {e.small}
                </p>
                <p className="text-xl font-semibold">{e.big}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="text-xl flex gap-5 items-center font-semibold bg-purple-500 text-black px-4 py-2 rounded-md my-10">
          Explore All<i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
      <div className="flex-[0.5]">
        <div>
          <p>Today's P&L</p>
          <SlotCounter
            startValue={startValue}
            value={value}
            animateUnchanged
            direction="bottom-up"
            autoAnimationStart={true}
            animationDuration={1.5}
            delay={1}
          />
        </div>
        <img
          src="https://stock-logos.dhan.co/static-openweb/lott5.png"
          alt=""
        />
      </div>
    </div>
  );
}
