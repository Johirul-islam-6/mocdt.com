import Image from "next/image";
import ceo from "../../app/Assets/Hero/ceo.jpg";
import Link from "next/link";

export const Ceo = () => {
  return (
    <>
      <div className="Discover flex w-[100%] mt-[70px] md:mt-[120px]">
        <div className="ceo-container w-[100%]  flex lg:flex-row flex-col-reverse md:flex-col lg:gap-3 justify-end ">
          <div className="text-containre md:w-[651px] flex justify-start md:mt-[75px]">
            <div>
              <div className=" ">
                <p className="section_title_36 career-title-bg md:text-start text-center">
                  Discover The Inspiring Vision of a Regular 17-Year-Old Who
                  Aims to{" "}
                  <span className="bg-gradient ">
                    {" "}
                    Revolutionize Work-Life Balance{" "}
                  </span>{" "}
                  for countless individuals.{" "}
                </p>
              </div>

              <div className="pt-[35px] md:pt-[55px]  text-containre">
                <Link href="/founder-story">
                  <button className="ceo-readmore-button rounded-[10px] w-[190px] h-[68px]">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
          {/* ------------ image ------------ */}
          <div className=" image-conterner  flex justify-end  md:w-[50%] ">
            <Image
              className="relative z-50 object-cover ceo rounded-[10px]"
              src={ceo}
              alt="Picture of the author"
              width={580}
              height={580}
              loading="lazy"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
    </>
  );
};
