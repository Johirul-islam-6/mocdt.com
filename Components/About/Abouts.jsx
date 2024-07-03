import Image from "next/image";
import Image1 from "../../app/Assets/about/about-banner.png";
import Image2 from "../../app/Assets/about/vision.png";
import "./About.css";
import "./ResponsiveAbout.css";

export const Abouts = () => {
  return (
    <>
      {/* -------------- about banner --------- */}
      <div className="banner py-10">
        <div className="flex justify-between ">
          <div className="gradient-rounded-div-left left-[0px] "></div>
          <div className="gradient-rounded-div-right right-[0px] "></div>
        </div>
        <h1 className="about-heading-64  md:mt-[80px] flex">
          Welcome to Mocdt
          <br className="hidden md:block" /> Pioneering the Future of
          Productivity!
          {/* <br className="hidden md:block" />  */}
        </h1>
      </div>

      {/* ---------------- about container row ---------- */}
      <div className="lg:mt-[150px]">
        <div className="md:pt-[70px] pt-[80px]">
          {/* --------- row -1 ------ */}
          <div className=" flex flex-col-reverse  md:gap-x-[40px] lg:gap-x-[60px] lg:flex-row justify-between items-center ">
            <div className="about-container-banner banner-image-end-1 w-full md:w-[50%] md:h-[220px]  mx-auto  justify-center flex items-center">
              <Image
                className=" object-cover  z-50 lg:py-20"
                width={600}
                height={200}
                src={Image1}
                alt=""
                quality={100}
                placeholder="blur"
              />
            </div>

            <div className="container-banner w-full  lg:w-[47%] mx-auto px-2 px-contant-about">
              <h1 className="about-container-title-28 text-center md:text-start">
                Mission Statement of Mocdt
              </h1>
              <p className="about-container-paragrap-16 pt-8 text-center md:text-start">
                We strive to provide a unified suite of innovative tools that
                not only enhance productivity but also contribute to the
                protection of our environment. Our mission is to reduce energy
                consumption, minimize paper usage, cut transportation emissions,
                and drive the adoption of renewable energy sources. We believe
                that, by fostering a culture of sustainable work practices, we
                can make a positive impact on the planet.
                <br />
                <br />
                We are dedicated to offering top-tier solutions that not only
                elevate the quality of work but also champion accessibility and
                security for all users. Our mission is to make collaboration a
                breeze, productivity a daily reality, and environmental
                responsibility a shared commitment.
                <br />
                <br />
                Mocdt's purpose is clear: to revolutionize the way you work, to
                make work, collaboration, and environmental consciousness
                coexist harmoniously, and to set new standards for a more
                efficient, interconnected, and sustainable future."
              </p>
            </div>
          </div>

          {/* --------- row -2 ------ */}
          <div className="mt-[60px] md:mt-[130px]  flex flex-col  md:gap-x-[40px] lg:gap-x-[40px] lg:flex-row justify-between items-center ">
            <div className="container-banner w-full  lg:w-[47%] mx-auto px-2 px-contant-about">
              <h1 className="about-container-title-28 text-center md:text-start">
                Vision Statement of Mocdt
              </h1>
              <p className="about-container-paragrap-16 pt-8 text-center md:text-start">
                At Mocdt, our vision is to be the driving force behind a future
                where work knows no bounds. We aim to lead the way in redefining
                productivity and collaboration by harnessing the power of
                cutting-edge AI technology.
                <br />
                <br />
                Our vision is to empower individuals and businesses with
                AI-driven tools that seamlessly integrate into their work,
                fostering innovation, efficiency, and creative excellence. We
                foresee a world where Mocdt is the go-to solution for work that
                transcends geographical and technological limitations.
                <br />
                <br />
                We aspire to pioneer a movement towards sustainable work
                practices, where energy conservation, reduced paper usage,
                lowered transportation emissions, and a greater reliance on
                renewable energy sources become the norm.
                <br />
                <br />
                We envision Mocdt as the epitome of accessibility, providing a
                level playing field for all users, regardless of language or
                ability. Security is at the heart of our vision, ensuring that
                user data is safeguarded with unwavering commitment.
                <br />
                <br />
                Our vision is to create a digital ecosystem where collaboration
                flows effortlessly, productivity soars, and environmental
                responsibility is an integral part of every action. With Mocdt,
                we aim to be the bridge between a future where work is not just
                productive but also harmonious with the planet, fostering a
                world of sustainable excellence
              </p>
            </div>

            <div className="about-container-banner banner-image-end-2 w-full md:w-[50%] md:h-[220px] lg:h-[100%] mx-auto  justify-center flex items-center">
              <Image
                className=" object-cover relative z-50 "
                width={600}
                height={200}
                src={Image2}
                alt=""
                quality={100}
                placeholder="blur"
              />
            </div>
          </div>

          {/* --------- place ----- */}

          {/* --------- place ----- */}
        </div>
      </div>
    </>
  );
};
