import Image from "next/image";
import image from "../../app/Assets/Moki/mail-sound.png";
import design from "../../app/Assets/Moki/design.png";
import "./Moki.css";
export const MokiServices = () => {
  return (
    <>
      <div>
        <div className="moki-service-container mt-[110px]">
          <h1 className="moki-transform-title-48 text-start text-[#fff] text-[35px] md:text-[48px] font-[500]">
            Transform your work life by minimizing screen time like never
            before!
          </h1>
          <div className="flex mt-[60px]">
            <Image
              className=" object-cover relative z-50 flex justify-center mx-auto"
              width={1400}
              height={620}
              src={image}
              alt=""
              quality={100}
              placeholder="blur"
            />
          </div>
          {/* ----------moki design ---------- */}

          <div className="image-containre w-full lg:w-[100%] relative z-50  flex justify-center  items-center mt-[40px] md:mt-[150px]">
            {/* <div className="block ">
              <div className=" gradient-rounded-div-top background_color_animation top-0 right-[400px] "></div>
              <div className="gradient-rounded-div-bottom background_color_animation bottom-[-00px] right-[400px] "></div>
            </div> */}
            <Image
              className=" object-cover relative z-50 "
              width={400}
              height={400}
              src={design}
              alt=""
              quality={100}
              placeholder="blur"
            />
          </div>

          <h1 className="mt-[40px] moki-design-title">
            Moki is designed with a steadfast commitment to protecting your
            privacy, ensuring your safety, and maintaining top-notch security.
          </h1>

          <p className="moki-design-paragrap text-[18px] text-center font-[400] text-[#A1A1A1] py-[50px] md:w-[814px] mx-auto">
            By choosing to utilize Moki, you are entrusting us with your
            valuable data, and we acknowledge the profound obligation we have to
            safeguard and honor it. Privacy remains a deeply personal matter;
            therefore, we have devised easily accessible privacy settings that
            empower you to make decisions that best suit your individual needs.
          </p>
        </div>
      </div>
    </>
  );
};
