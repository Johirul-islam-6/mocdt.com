"use client";

import mail from "../../app/Assets/Products/mail.png";

import authenticator from "../../app/Assets/Products/authenticator.png";
import explore from "../../app/Assets/Products/explore.png";
import dns from "../../app/Assets/Products/dns.png";
import calendar from "../../app/Assets/Products/calendar.png";
import analytics from "../../app/Assets/Products/analytics.png";
import workspace from "../../app/Assets/Products/workspace.png";
import file from "../../app/Assets/Products/file.png";
import cdo from "../../app/Assets/Products/cdo.png";
import moki from "../../app/Assets/Products/moki.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

const SmallProductSlider = () => {
  const products = [
    {
      image: explore,
      title: "Explore",
      link: "https://explore.mocdt.com/",
    },
    {
      image: dns,
      title: "DNS Flow",
      link: "https://dns.mocdt.com/",
    },
    {
      image: authenticator,
      title: "Authenticator",
      link: "https://authenticator.mocdt.com/",
    },
    {
      image: workspace,
      title: "Workspace",
    },
    {
      image: calendar,
      title: "Calendar",
      link: "https://calendar.mocdt.com/",
    },
    {
      image: analytics,
      title: "Analytics",
      link: "https://analytics.mocdt.com/",
    },
    {
      image: file,
      title: "File",
      link: "https://file.mocdt.com/",
    },
    {
      image: cdo,
      title: "C Do",
      link: "https://cdo.mocdt.com/"
    },
  
    {
      image: mail,
      title: "Mail",
      link: "https://email.mocdt.com/",
    },
  
    {
      image: moki,
      title: "Moki",
      link: "https://mocdt.com/moki",
    },
  

  ];

  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        speed={5000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: true,
          pauseOnMouseEnter: true,
        }}
        loop={true}
        breakpoints={{
          420: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1160: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
          1650: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          2000: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {products?.map((item, index) => (
          <SwiperSlide key={index}>
            <a href={item.link}>
            <div className="bg-black border border-[#414548]  xl:w-[280px] 2xl:w-[320px] sm:h-[115px] h-[90px] rounded-[10px] flex gap-2 items-center justify-center">
              <Image
                src={item.image}
                alt="Picture of product"
                width={80}
                height={76}
                className="product_image"
              />
              <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] font-[500]">
                {item.title}
              </p>
            </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SmallProductSlider;
