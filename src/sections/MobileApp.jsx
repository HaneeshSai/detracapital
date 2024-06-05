import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
const apps = [
  {
    name: "Detracapital Mobile App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium asperiores quae reiciendis, quia, ipsam consequuntur perferendis assumenda rem dignissimos aliquid dolores eaque accusantium quisquam, culpa modi doloremque mollitia magni?",
    img: "https://stock-logos.dhan.co/static-openweb/dhanopttrial.svg",
  },
  {
    name: "Detracapital Web App",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laudantium asperiores quae reiciendis, quia, ipsam consequuntur perferendis assumenda rem dignissimos aliquid dolores eaque accusantium quisquam, culpa modi doloremque mollitia magni?",
    img: "https://stock-logos.dhan.co/static-openweb/dhanWeb3.png",
  },
];

export default function MobileApp() {
  const [slide, setSlide] = useState(0);
  console.log(slide);
  return (
    <div className="text-white bg-[#491f45] py-20">
      <Swiper slidesPerView={1} spaceBetween={30} loop={true}>
        {apps.map((e, i) => (
          <SwiperSlide key={i}>
            {({ isActive }) => {
              setSlide(isActive ? setSlide(i) : null);
            }}
            <div className="px-36">
              <h1 className="font-bold my-10 text-center text-4xl">
                We Built You The Best Platforms for Trading.
              </h1>
              <div className="flex items-center gap-32">
                <div className="flex-1">
                  <h1 className="text-3xl my-4 font-semibold">{e.name}</h1>
                  <p className="font-medium">{e.desc}</p>
                  <button className="mt-10 flex bg-purple-500 px-4 py-1 font-medium rounded-lg gap-5 items-center">
                    Explore {e.name} now{" "}
                    <i class="fa-solid text-xl fa-arrow-right"></i>
                  </button>
                </div>
                <div className="flex-[0.7]">
                  <img src={e.img} alt="" className="w-full" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div></div>
    </div>
  );
}
