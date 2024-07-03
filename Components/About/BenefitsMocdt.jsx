import Image from "next/image";
import Image1 from "../../app/Assets/about/Crystamain.png";
import Image2 from "../../app/Assets/about/crytel.png";
import "./BenefitsMocdt.css";
import "./About.css";
import "./ResponsiveAbout.css";

export const BenefitsMocdt = () => {
  return (
    <>
      <div className="pt-[70px] md:pt-[120px]">
        <h1 className="title-heading text-start  md:w-[502px]">
          User Benefits of Mocdt
        </h1>

        <p className="section_title_1 mt-[40px]">Collaboration Hub:</p>
        <p className="section_sub_title mt-[5px]">
          Real-time teamwork is just a click away with Mocdt Workspace.
        </p>
        <p className="section_title_2 mt-[40px]">Productivity Boost:</p>
        <p className="section_sub_title mt-[5px]">
          Smart email features, such as Mocdt Mail's br smart compose and{" "}
          <br className="br-space-class" /> reply, cut down on email writing
          time.
        </p>
        <p className="section_title_3 mt-[40px]">Accessible to All: </p>
        <p className="section_sub_title mt-[5px]">
          We welcome everyone with multiple language options and disability -{" "}
          <br className="br-space-class" /> friendly features.
        </p>
        <p className="section_title_4 mt-[40px]">Unleash Creativity: </p>
        <p className="section_sub_title mt-[5px]">
          AI ignites your creative potential, offering fresh ideas and{" "}
          <br className="br-space-class" /> unexplored possibilities.
        </p>
        <p className="section_title_5 mt-[40px]">Ironclad Security: </p>
        <p className="section_sub_title mt-[5px]">
          Your data is a fortress with us, safeguarded by cutting-edge security{" "}
          <br className="br-space-class" /> measures.
        </p>
        <p className=" section_title_6 mt-[40px]">Elevated Quality: </p>
        <p className="section_sub_title mt-[5px]">
          Mocdt polishes your work with grammar corrections, improved{" "}
          <br className="br-space-class" /> clarity, and innovative ideas
        </p>

        <div>
          <h1 className="section_title_7 mt-[130px] md:mt-[150px]">
            Mocdt's Green Initiative
          </h1>
          <p className="section_sub_2 pt-[20px]">
            Mocdt isn't just about work; it's also about{" "}
            <br className="br-space-class" /> safeguarding the environment
          </p>
        </div>

        {/* ------- benifit image container----- */}

        <div className=" benifit flex flex-col md:flex-row  md:gap-x-[40px] items-center justify-between pt-[70px]">
          <div className="benefit-containers justify-center items-center md:w-[42%]  mx-auto ">
            <Image
              className="object-cover"
              height={500}
              width={500}
              src={Image1}
              quality={100}
              placeholder="blur"
              alt=""
            />
          </div>

          {/* ---------- benifit containt -------- */}
          <div className="benefit-containers justify-center items-center  md:w-[55%] mt-60px-benifit pb-10">
            <div>
              {/* ----- box -1--- */}
              <div className="core-box benifit-box flex gap-5 items-center ">
                <Image
                  className=" object-cover relative z-50 benifit-box-image "
                  width={270}
                  height={110}
                  src={Image2}
                  alt=""
                  quality={100}
                  placeholder="blur"
                />

                <div className="text">
                  <h1 className="title_second">
                    {" "}
                    <span className="green-title">Energy Efficiency</span>{" "}
                    <br className="br-space-class" />
                    Save energy as AI automates tasks and optimizes your work
                    processes
                  </h1>
                </div>
              </div>
              {/* ----- box -2--- */}
              <div className="core-box benifit-box flex gap-5 items-center mt-[85px]">
                <Image
                  className=" object-cover relative z-50 benifit-box-image "
                  width={270}
                  height={110}
                  src={Image2}
                  alt=""
                  quality={100}
                  placeholder="blur"
                />

                <div className="text">
                  <h1 className="title_second">
                    {" "}
                    <span className="green-title">
                      Paperless Efficiency{" "}
                    </span>{" "}
                    <br className="br-space-class" />
                    Reduce paper consumption as we create digital documents,
                    saving trees and the environment..
                  </h1>
                </div>
              </div>
              {/* ----- box -3--- */}
              <div className="core-box benifit-box flex gap-5 items-center mt-[85px]">
                <Image
                  className=" object-cover relative z-50 benifit-box-image "
                  width={270}
                  height={110}
                  src={Image2}
                  alt=""
                  quality={100}
                  placeholder="blur"
                />

                <div className="text">
                  <h1 className="title_second">
                    {" "}
                    <span className="green-title">
                      Eco-Friendly Collaboration
                    </span>{" "}
                    <br className="br-space-class" />
                    Cut down on transportation emissions with remote
                    collaboration, reducing the need for commuting and business
                    trips..
                  </h1>
                </div>
              </div>
              {/* ----- box -4--- */}
              <div className="core-box benifit-box flex gap-5 items-center mt-[85px]">
                <Image
                  className=" object-cover relative z-50 benifit-box-image "
                  width={270}
                  height={110}
                  src={Image2}
                  alt=""
                  quality={100}
                  placeholder="blur"
                />

                <div className="text">
                  <h1 className="title_second">
                    {" "}
                    <span className="green-title">
                      Renewable Energy Advocate
                    </span>{" "}
                    <br className="br-space-class" />
                    By joining the Mocdt revolution, you're supporting the
                    transition to renewable energy, reducing reliance on fossil
                    fuels and improving the environmental impact of the
                    internet.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
