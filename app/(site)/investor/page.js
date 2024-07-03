import React from "react";
import "./investor.css";
import Image from "next/image";
import Image1 from "../../Assets/investor/VPN (2).png";
import Image4 from "../../Assets/investor/inovention.png";
import Image5 from "../../Assets/investor/connection (1).png";
import Image9 from "../../Assets/investor/shild.png";
import Image6 from "../../Assets/investor/hand.png";
import Image7 from "../../Assets/investor/tool.png";
import Image8 from "../../Assets/investor/help.png";
import Faq from "@/Components/Faqs/Faq";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto section_padding  ">
      <div>
        <h1 className="page_title_64 text-center ">
          Invest In a More Equitable,
          <br className="hidden lg:block" /> Community-Driven, And Inclusive AI
          Technology
        </h1>
        <div className=" flex justify-center section_padding">
          <button className="invest_button  text-white btn-size">
            Invest Now
          </button>
        </div>
      </div>

      <div className="section_padding flex flex-col md:gap-[70px] lg:flex-row justify-between items-center mt-[20px]">
        <div>
          <h1 className="ins-section-title md:mt-24">Our Mission</h1>
          <p className="ins-section-sub md:w-[525px] mt-5">
            At MocDT, we're on a mission to redefine the landscape of work
            software. Our vision is to become the world's foremost provider of
            AI-powered solutions, empowering individuals and businesses to
            unlock unprecedented levels of productivity and success. By the
            close of 2029, we aspire to positively impact the lives of millions
            of users, giving them the tools they need to achieve more while
            simplifying their digital journey.
          </p>
        </div>

        <div className="container-banner w-full md:w-[50%] relative mt-5 justify-center flex items-center">
          <div className="block ">
            <div className=" gradient-rounded-div-top background_color_animation top-0 right-[420px]"></div>
            <div className="gradient-rounded-div-bottom background_color_animation bottom-[480px] right-[320px]"></div>
          </div>
          <Image
            className=" object-cover relative z-50 "
            width={485}
            height={390}
            src={Image1}
            alt=""
            quality={100}
            placeholder="blur"
          />
        </div>
      </div>

      <div>
        <h1 className="page_title_64 section_padding">
          What is Mocdt & Core Values
        </h1>

        <div className="section_padding">
          <div className="flex flex-col md:flex-row  md:gap-40 ">
            <div>
              <div className="flex gap-5 mb-20">
                <div>
                  <Image
                    className="mt-5"
                    height={50}
                    width={120}
                    src={Image4}
                    alt="img"
                  />
                </div>
                <div>
                  <h1 className="ins-sub-heading mt-5">Innovation</h1>
                  <h3 className="paragraph_14">
                    We believe in continuously pushing the boundaries of
                    technology to develop cutting-edge solutions that anticipate
                    and meet the evolving needs of our users.
                  </h3>
                </div>
              </div>
              <div className="flex gap-5 mb-20">
                <div>
                  <Image
                    className="mt-5"
                    height={50}
                    width={110}
                    src={Image5}
                    alt="img"
                  />
                </div>
                <div>
                  <h1 className="ins-sub-heading mt-5">User-Centricity</h1>
                  <h3 className="paragraph_14">
                    Our users are at the heart of everything we do. We
                    prioritize their needs and preferences to create a seamless
                    and personalized experience.
                  </h3>
                </div>
              </div>
              <div className="flex gap-5 mb-20">
                <div>
                  <Image
                    className="mt-5"
                    height={50}
                    width={100}
                    src={Image6}
                    alt="img"
                  />
                </div>
                <div>
                  <h1 className="ins-sub-heading mt-5">Collaboration</h1>
                  <h3 className="paragraph_14">
                    We foster a culture of teamwork and collaboration,
                    recognizing that diverse perspectives and skills lead to the
                    best outcomes.
                  </h3>
                </div>
              </div>
            </div>

            <div>
              <div className="flex gap-5 mb-20">
                <div>
                  <Image
                    className="mt-5 "
                    height={50}
                    width={100}
                    src={Image9}
                    alt="img"
                  />
                </div>
                <div>
                  <h1 className="ins-sub-heading mt-5">Integrity</h1>
                  <h3 className="paragraph_14">
                    Honesty, transparency, and ethical practices are fundamental
                    to our interactions with users, partners, and stakeholders.
                  </h3>
                </div>
              </div>
              <div className="flex gap-5 mb-20">
                <div>
                  <Image
                    className="mt-5"
                    height={50}
                    width={120}
                    src={Image7}
                    alt="img"
                  />
                </div>
                <div>
                  <h1 className="ins-sub-heading mt-5">Empowerment</h1>
                  <h3 className="paragraph_14">
                    We empower individuals and businesses to take control of
                    their work processes, providing them with the tools and
                    resources to achieve their goals.
                  </h3>
                </div>
              </div>
              <div className="flex gap-5 mb-20">
                <div>
                  <Image
                    className="mt-5"
                    height={50}
                    width={120}
                    src={Image8}
                    alt="img"
                  />
                </div>
                <div>
                   <h1 className="ins-sub-heading mt-5">Social Impact</h1>
                  <h3 className="paragraph_14">
                    We strive to make a positive impact on society by promoting
                    productivity, efficiency, and work-life balance for
                    individuals and businesses.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="mt-10">
        <Faq/>
      </div>
    </div>
  );
};

export default page;
