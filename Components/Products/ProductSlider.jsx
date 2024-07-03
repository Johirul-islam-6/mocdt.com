"use client";

import dns from "../../app/Assets/Products/dns.png";
import cdo from "../../app/Assets/Products/cdo_rounded.png";
import file from "../../app/Assets/Products/file_rounded.png";
import calendar from "../../app/Assets/Products/calendar.png";
import authenticator from "../../app/Assets/Products/authenticator.png";

import explore from "../../app/Assets/Products/explore.png";
import mail from "../../app/Assets/Products/mail.png";
import analytics from "../../app/Assets/Products/analytics.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import Link from "next/link";

const ProductSlider = () => {
  const products = [
    {
      title: "DNS Flow",
      image: dns,
      description:
        "Complex and cumbersome DNS management? Streamline Your DNS with Advanced DNS Flow",
      link: "https://dns.mocdt.com/",
    },
    {
      title: "C DO",
      image: cdo,
      description:
        "Say hello to C DO, your all-in-one solution for faster and smarter app development. ",
      link: "https://cdo.mocdt.com/",
    },
    {
      title: " File",
      image: file,
      description:
        "You can upload and store you file organize with our advance MocAI",
      link: "https://file.mocdt.com/",
    },

    {
      title: " Mail",
      image: mail,
      description:
        "Say goodbye to manual email responses and hello to lightning-fast,stress-free communications with Mocdt Mail.",
      link: "https://email.mocdt.com/",
    },
    {
      title: "Authenticator",
      image: authenticator,
      description:
        "Boost your security with Mocdt's AI-backed Authenticator.Effortless protection at your fingertips",
      link: "https://authenticator.mocdt.com/",
    },
    {
      title: " Explore",
      image: explore,
      description:
        "The Mocdt Explore. Elegant, Functional,Simple, Secure, and AI Based Web Browser.",
      link: "https://explore.mocdt.com/",
    },
    {
      title: " Calendar",
      image: calendar,
      description:
        "Say goodbye to manual task management responses and hello stress-free communications with Mocdt calendar.",
      link: "https://calendar.mocdt.com/",
    },
    {
      title: "Analytics",
      image: analytics,
      description:
        "Experience the ultimate analysts tools, with prioritizing user privacy.",
      link: "https://analytics.mocdt.com/",
    },
  ];

  return (
    <div className="section_padding">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        speed={5000}
        autoplay={{
          delay: 1,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        loop={true}
        breakpoints={{
          440: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          720: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1090: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1270: {
            slidesPerView: 4,
            spaceBetween: 250,
          },
          1650: {
            slidesPerView: 4,
            spaceBetween: 100,
          },
          1850: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
          2250: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {products?.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="lg:w-[320px] xl:w-[370px] 2xl:w-[370px] h-[300px] md:h-auto  rounded-[8.523px] overflow-hidden border border-[#414548]">
              <div className="flex md:flex-row flex-col items-center justify-center gap-4 h-[145px] products_bg">
                <Image
                  src={item?.image}
                  alt="Picture of product"
                  // width={80}
                  // height={76}
                  loading="lazy"
                  className="w-[50px] h-[50px] md:w-[66px] md:h-[66px]"
                />
                <p className="text-white product_title_29 uppercase">
                  {item?.title}
                </p>
              </div>
              <div className="px-3 py-4 bg-black flex flex-col gap-4 h-full">
                <p className="product_description_11 text-[#EFEFEF] ">
                  {item.description}
                </p>
                <Link href={item.link}>
                  <button className="bg-[#202227] rounded-[6.818px] text-[13.637px] w-full h-[47.729px] text-[#FAFAFA] tracking-[0.4px]  ">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
