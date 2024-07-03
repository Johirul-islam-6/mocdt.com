import React from "react";
import "./../story/story.css";
import Image from "next/image";
import Image1 from "./../../Assets/mision/Illustration.png";
import "../newsroom/Button.css";
import "../newsroom/newsroom.css";
import SubscribeButton from "@/Components/SubscribeButton/SubscribeButton";

const page = () => {
  return (
    <div>
      <div className="max-w-screen-xl mx-auto mt-32 md:mt-40 mb-16 ">

        {/* ------------ gradient div------- */}
        <div className="flex justify-between">
          <div className="story-gradient-rounded-left top-[500px] left-[0px] "></div>
          <div className="story-gradient-rounded-right top-[500px]  right-[0px] "></div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center  ">
          <div className="md:w-[50%]">
            <h1 className="page_title_story">
              At Mocdt, <br className="hidden md:block" /> our mission is simple
            </h1>
            <p className="p_title opacity-80 py-7">
              we help people save precious time so they can focus on what they
              truly enjoy. We understand that time is a valuable resource, and
              our platform is designed to streamline tasks and boost
              productivity.With Mocdt, you can automate repetitive tasks and
              receive helpful suggestions to make your workflow more efficient.
              By eliminating time-consuming manual processes, you'll have more
              time to dedicate to your passions, hobbies, and loved ones.
            </p>
          </div>
          <div className="md:w-[40%] mt-10">
            <Image className="relative z-10" height={400} width={600} src={Image1} alt="" />
          </div>
        </div>
        
       
        <div className="section_padding opacity-80">
          <p className="mb-8 p_title">
            But our mission doesn't stop there. We also believe in promoting
            sustainability and reducing our environmental impact. Here's how
            Mocdt contributes to a greener future:
          </p>
          <p className="mb-8 p_title">
            Reduced Energy Consumption:Mocdt helps you be more productive by
            automating tasks and providing suggestions. This means you spend
            less time on your devices, resulting in reduced energy consumption.
            By using Mocdt, you're not only saving time but also doing your part
            in conserving energy resources
          </p>
          <p className="mb-8 p_title">
            Reduced Paper Consumption:Say goodbye to unnecessary printing! Mocdt
            allows you to generate documents and presentations directly in
            digital formats. This not only saves trees but also reduces the
            environmental impact of paper production and disposal. Together, we
            can make a difference by minimizing paper waste.
          </p>
          <p className="mb-8 p_title">
            Reduced Transportation Emissions:Collaborate without commuting! With
            Mocdt's collaboration features, you can work on projects remotely,
            reducing the need for commuting and business trips. By minimizing
            transportation emissions, we contribute to cleaner air and a
            healthier planet.
          </p>
          <p className="mb-8 p_title">
            Increased Use of Renewable Energy:As more people join the Mocdt
            community, we have the potential to drive the demand for renewable
            energy sources. By promoting a shift towards renewable energy, we
            can reduce reliance on fossil fuels and pave the way for a
            sustainable future.
          </p>
          <p className="mb-8 p_title">
            Join us in our mission to save time and promote sustainability.
          </p>
        </div>
      </div>
      <div className="flex mt-5 justify-center items-center section_padding">
      <SubscribeButton/>
      </div>
    </div>
  );
};

export default page;
