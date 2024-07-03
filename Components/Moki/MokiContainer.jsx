import Image from "next/image";
import "./Moki.css";
import Meeting from "../../app/Assets/Moki/meeting.png";
import moki from "../../app/Assets/Moki/moki.png";
import box from "../../app/Assets/Moki/box.png";

import auth from "../../app/Assets/Moki/moki-icon/lock.png";
import file from "../../app/Assets/Moki/moki-icon/file.png";
import explore from "../../app/Assets/Moki/moki-icon/explore.png";
import calendar from "../../app/Assets/Moki/moki-icon/calander.png";
import analytics from "../../app/Assets/Moki/moki-icon/analycic.png";
import mail from "../../app/Assets/Moki/moki-icon/mail.png";
import more from "../../app/Assets/Moki/moki-icon/more.png";

export const MokiContainer = () => {
  const toolsBox = [
    {
      img: auth,
      title: "Authenticator",
    },
    {
      img: file,
      title: "File",
    },
    {
      img: explore,
      title: "Explore",
    },
    {
      img: calendar,
      title: "Calendar",
    },
    {
      img: analytics,
      title: "Analytics",
    },
    {
      img: mail,
      title: "Mail",
    },
    {
      img: more,
      title: "Add more apps",
    },
  ];

  return (
    <>
      <div>
        {/* --------- moki service 01 ------- */}
        <div className="moki-container flex flex-col lg:flex-row justify-center items-center md:gap-10 gap-y-10 md:gap-y-0 mx-auto relative z-50">
          <div className="w-full lg:w-[60%] flex justify-center items-center mx-auto lg:ms-10">
            <h1 className="page_title_64 title_gradient_color ">
              Moki, text Pranta,
              <br className="hidden xl:block sm-hidde" /> today's meeting
              <br className="hidden xl:block sm-hidde" /> is at 10 o'clock
            </h1>
          </div>

          <div className="image-containre w-full lg:w-[50%] relative z-50   flex justify-center  items-center">
            <Image
              className=" object-cover relative z-50 px-5 md:px-2 "
              width={400}
              height={400}
              src={Meeting}
              alt=""
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>

        <div className="moki-service flex  gap-10 mt-[50px] ">
          {/* --------- moki service 02 ------- */}
          <div className="moki-box-01 block flex-col lg:flex-row justify-center py-5 items-center gap-y-28 mx-auto ">
            <div className="image-containre-1 w-full lg:h-[50%] relative   flex justify-center  items-center lg:pe-5">
              <Image
                className=" object-cover relative z-50 "
                width={600}
                height={600}
                src={moki}
                alt=""
                quality={100}
                placeholder="blur"
              />
            </div>

            <div className="w-full lg:h-[50%] flex justify-center items-center mx-auto ">
              <h1 className=" title_gradient_color text-[35px] md:text-[48px] font-[600] text-start px-3">
                Hey Moki ,
                <br className="hidden xl:block" /> Create a porojet on
                <br className="hidden xl:block" /> mocdt Workpace
              </h1>
            </div>
          </div>

          {/* --------- moki service 03 ------- */}

          <div className="moki-box-01 block flex-col lg:flex-row justify-center items-center py-5 md:gap-y-28 mx-auto">
            <div className="w-full lg:h-[50%] flex justify-center items-start mx-auto ">
              <h1 className=" title_gradient_color text-[36px] font-[600] text-start pt-8 px-3">
                You can assess Moki,
                <br className="hidden xl:block" /> The way you want
              </h1>
            </div>

            <div className="image-containre-2 w-full lg:h-[50%] relative   flex justify-center  items-center">
              <Image
                className=" object-cover relative z-50 "
                width={500}
                height={450}
                src={box}
                alt=""
                quality={100}
                placeholder="blur"
              />
            </div>
          </div>
        </div>

        {/* -------------- moki tools ----------- */}

        <div className="moki-tools mt-[40px] md:mt-[110px]">
          <p className="moki-titl-24 text-start">
            Moki integrates with your favorite tools.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start items-center gap-[13px] mt-[25px] w-[100%]">
            {toolsBox?.map((box) => {
              return (
                <>
                  <div className="tools-box">
                    <div>
                      <Image
                        className=" object-cover relative z-50 flex justify-center mx-auto"
                        width={60}
                        height={60}
                        src={box?.img}
                        alt=""
                        quality={100}
                        placeholder="blur"
                      />
                      <p className="text-[16px] font-[500] text-center text-[#D6D6D6] pt-2">
                        {box?.title}
                      </p>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
