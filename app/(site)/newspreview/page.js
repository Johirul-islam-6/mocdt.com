/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import Image1 from "../../Assets/News/unsplash_npTT9rD8wd4 (2).png";
import Image2 from "../../Assets/News/Frame 1707478080.png";
import Image3 from "../../Assets/News//5 (1).png";
import Image5 from "../../Assets/News/06.png";

const page = () => {
  return (
    <div className="max-w-screen-xl mx-auto ">
      <div className="">
        <Image height={500} width={1300} src={Image1} alt="img" />
      </div>

      <div className="w-full text-white  ">
        <div className="flex flex-col md:flex-row items-center  justify-between gap-20">
          <div className="lg:w-[60%]">
            <h1 className="section_title_36">
              Navigating the Metaverse: Mocdt's Insights on Virtual Reality.
            </h1>
            <h6 className=".early_access mt-4">10 min ago</h6>

            <div className="flex  gap-5 short-bio">
              <Image
                className="mt-2"
                src={Image5}
                height={40}
                width={40}
                alt=""
              />
              <h1 className="mt-5">by Fardin Sheikh</h1>
            </div>
            <p className="mt-3">
              Virtual reality is no longer science fiction; it's a tangible
              reality that Mocdt is actively shaping. Our VR initiatives are
              designed to immerse users in breathtakingly lifelike environments,
              whether they're exploring distant galaxies, participating in
              hands-on training, or engaging in immersive storytelling. We
              believe that VR has the potential to revolutionize industries,
              from education and healthcare to entertainment and commerce.
            </p>
            <p className=" mt-3 font-[14px]">
              Mocdt's commitment to VR extends beyond entertainment; it's about
              pushing the boundaries of what technology can achieve. We're
              dedicated to making VR accessible to everyone, whether you're a
              gamer looking for the next level of immersion or a professional
              seeking innovative solutions. Join us on this thrilling journey
              into the metaverse, where the line between the real and the
              digital blurs, and possibilities are limited only by our
              imagination. Stay tuned for updates on our latest VR projects and
              how they're shaping the future of technology.
            </p>

            <p className="mt-3">
              Our journey into the metaverse is fueled by a deep passion for
              pushing boundaries and breaking new ground in technology. With
              every VR project, we aim to blur the lines between reality and
              imagination, inviting users to step into new worlds and
              possibilities. Stay connected with us as we continue to innovate
              and explore the incredible potential of virtual reality, shaping a
              future where the digital realm seamlessly integrates with our
              everyday lives
            </p>
          </div>

          <div className="lg:w-[40%] mt-24">
            <Image height={400} width={400} src={Image2} alt="" />
            <Image
              className="mt-14"
              height={400}
              width={400}
              src={Image3}
              alt=""
            />
          </div>
        </div>

        <div className="flex md:w-[60%] w-[100]  mx-auto ">
          <div className="gradient-rounded-div-left left-[0px]  "></div>
          <div className="gradient-rounded-div-right right-[400px] "></div>
        </div>
      </div>
    </div>
  );
};

export default page;
