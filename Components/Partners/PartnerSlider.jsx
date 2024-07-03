"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import Image from "next/image";
import aws from "../../app/Assets/Partners/aws.png";
import Azure from "../../app/Assets/Partners/Azure.png";
import github from "../../app/Assets/Partners/github.png";
import googlecloud from "../../app/Assets/Partners/googlecloud.png";
import intercom from "../../app/Assets/Partners/intercom.png";
import linkedin from "../../app/Assets/Partners/linkedin.png";
import mercury from "../../app/Assets/Partners/mercury.png";
import mongodb from "../../app/Assets/Partners/mongodb.png";
import ms_startups from "../../app/Assets/Partners/ms_startups.png";
import mux from "../../app/Assets/Partners/mux.png";
import openai from "../../app/Assets/Partners/openai.png";
import retool from "../../app/Assets/Partners/retool.png";
import slite from "../../app/Assets/Partners/slite_logo 1.png";
import stripe from "../../app/Assets/Partners/stripe.png";
import vs from "../../app/Assets/Partners/vs.png";
import ycombi from "../../app/Assets/Partners/ycombi.png";
import zendesk from "../../app/Assets/Partners/zendesk.png";
import newchip from "../../app/Assets/Partners/newchip.png";

const PartnerSlider = () => {
  const products = [
    aws,
    Azure,
    github,
    googlecloud,
    intercom,
    linkedin,
    mercury,
    mongodb,
    ms_startups,
    mux,
    openai,
    retool,
    slite,
    stripe,
    vs,
    ycombi,
    zendesk,
    newchip,
  ];

  return (
    <div>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
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
            slidesPerView: 4,
            spaceBetween: 20,
          },
          640: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1160: {
            slidesPerView: 7,
            spaceBetween: 50,
          },
          1650: {
            slidesPerView: 8,
            spaceBetween: 50,
          },
          2000: {
            slidesPerView: 9,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="">
            <Image
              loading="lazy"
              src={aws}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem]"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <Image
              loading="lazy"
              src={Azure}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem]"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <Image
              loading="lazy"
              src={zendesk}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem]"
            />
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className="">
            <Image
             loading="lazy"
                          src={newchip}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem] "
            />
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <div className="">
            <Image
              loading="lazy"
              src={vs}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem]"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <Image
              loading="lazy"
              src={stripe}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem]"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <Image
              loading="lazy"
              src={slite}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem]"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <Image
              loading="lazy"
              src={retool}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem]"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <Image
              loading="lazy"
              src={openai}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem]"
            />
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className="">
            <Image
             loading="lazy"
                          src={mux}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem]"
            />
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <div className="">
            <Image
              loading="lazy"
              src={ms_startups}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem]"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <Image
              loading="lazy"
              src={mongodb}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem]"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <Image
              loading="lazy"
              src={mercury}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem]"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <Image
              loading="lazy"
              src={linkedin}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem]"
            />
          </div>
        </SwiperSlide>

        {/* <SwiperSlide>
          <div className="">
            <Image
             loading="lazy"
                          src={intercom}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem]"
            />
          </div>
        </SwiperSlide> */}

        <SwiperSlide>
          <div className="">
            <Image
              loading="lazy"
              src={googlecloud}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem]"
            />
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="">
            <Image
              loading="lazy"
              src={github}
              alt="Picture of partner"
              width={80}
              height={76}
              quality={100}
              className="w-[7rem] md:w-[8.5rem] lg:w-[10rem]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PartnerSlider;
