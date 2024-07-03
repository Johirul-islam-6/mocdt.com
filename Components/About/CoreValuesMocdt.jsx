import Image from "next/image";
import "./About.css";
import "./ResponsiveAbout.css";

import about01 from "../../app/Assets/about/01.png";
import about02 from "../../app/Assets/about/02.png";
import about03 from "../../app/Assets/about/03.png";
import about04 from "../../app/Assets/about/04.png";
import about05 from "../../app/Assets/about/05.png";
import about06 from "../../app/Assets/about/06.png";

import "./CoreValuesMocdt.css";
import Link from "next/link";

export const CoreValuesMocdt = () => {
  return (
    <>
      <div className=" mt-[80px] md:mt-[190px] pb-[80px] ">
        <div className="py-[20px] relative z-2">
          <h1 className="core-heading-36 md:w-[685px] mx-auto">
            Our Core Values Drive Positive Impact, Empower Users in Tech{" "}
          </h1>

          <div className="container-core flex flex-wrap gap-16 mt-[40px]">
            <div className="core-box flex gap-5 items-center w-[47%] mx-auto">
              <Image
                className=" object-cover relative z-50 "
                width={100}
                height={110}
                src={about01}
                alt=""
                quality={100}
                placeholder="blur"
              />

              <div className="text">
                <h1 className="core-title-24">Innovation</h1>
                <p className="core-paragrap-24 pt-2">
                  We believe in continuously pushing the boundaries of
                  technology to develop cutting-edge solutions that anticipate
                  and meet the evolving needs of our users.
                </p>
              </div>
            </div>

            <div className="core-box flex gap-5 items-center w-[47%] mx-auto">
              <Image
                className=" object-cover relative z-50 "
                width={100}
                height={100}
                src={about02}
                alt=""
                quality={100}
                placeholder="blur"
              />

              <div className="text">
                <h1 className="core-title-24">Integrity</h1>
                <p className="core-paragrap-24 pt-2">
                  Honesty, transparency, and ethical practices are fundamental
                  to our interactions with users, partners, and stakeholders.
                </p>
              </div>
            </div>

            <div className="core-box flex gap-5 items-center w-[47%] mx-auto">
              <Image
                className=" object-cover relative z-50 "
                width={100}
                height={100}
                src={about03}
                alt=""
                quality={100}
                placeholder="blur"
              />

              <div className="text">
                <h1 className="core-title-24">User-Centricity</h1>
                <p className="core-paragrap-24 pt-2">
                  Our users are at the heart of everything we do. We prioritize
                  their needs and preferences to create a seamless and
                  personalized experience.
                </p>
              </div>
            </div>

            <div className="core-box flex gap-5 items-center w-[47%] mx-auto">
              <Image
                className=" object-cover relative z-50 "
                width={100}
                height={100}
                src={about04}
                alt=""
                quality={100}
                placeholder="blur"
              />

              <div className="text">
                <h1 className="core-title-24">Empowerment</h1>
                <p className="core-paragrap-24 pt-2">
                  We empower individuals and businesses to take control of their
                  work processes, providing them with the tools and resources to
                  achieve their goals.
                </p>
              </div>
            </div>

            <div className="core-box flex gap-5 items-center w-[47%] mx-auto">
              <Image
                className=" object-cover relative z-50 "
                width={100}
                height={100}
                src={about05}
                alt=""
                quality={100}
                placeholder="blur"
              />

              <div className="text">
                <h1 className="core-title-24">Collaboration</h1>
                <p className="core-paragrap-24 pt-2">
                  We foster a culture of teamwork and collaboration, recognizing
                  that diverse perspectives and skills lead to the best
                  outcomes.
                </p>
              </div>
            </div>

            <div className="core-box flex gap-5 items-center w-[47%] mx-auto">
              <Image
                className=" object-cover relative z-50 "
                width={100}
                height={100}
                src={about06}
                alt=""
                quality={100}
                placeholder="blur"
              />

              <div className="text">
                <h1 className="core-title-24">Social Impact</h1>
                <p className="core-paragrap-24 pt-2">
                  We strive to make a positive impact on society by promoting
                  productivity, efficiency, and work-life balance for
                  individuals and businesses.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* <Image
              className=" object-cover relative z-50 "
              width={1450}
              height={1300}
              src={about}
              alt=""
              quality={100}
              placeholder="blur"
            /> */}
      </div>
      {/* ------------------- waitlisht ---------------- */}
      <div className="py-[80px] md:py-[120px]">
        <div className="section_title md:text-start text-center ">
          Choose Mocdt and embrace a new era of{" "}
          <span className="sub_title_1">productivity</span>, all while taking
          significant steps towards a greener planet. Join us for a powerful,
          professional, and{" "}
          <span className="sub_title_2">revolutionary journey!</span> 🚀🌐🌿
        </div>
        <div className="flex justify-center md:justify-start items-center">
          <button className="gradient_button mt-14 ">
            <Link
              className="title_gradient_color gradient_button_text font-[10px]"
              href="https://mocdt.typeform.com/join-waitlist"
            >
              {" "}
              Join the Waitlist
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};
