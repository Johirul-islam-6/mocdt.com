import "./Product.css";

import fileImage from "../../app/Assets/mocdt-file/mocdt-file.png";
import MocdtFile01 from "../../app/Assets/mocdt-file/Mocdt-file-1.png";
import MocdtFile02 from "../../app/Assets/mocdt-file/Mocdt-file-2.png";

import Image from "next/image";
import Link from "next/link";

export const Product = () => {
  return (
    <>
      <div className="Products mt-[5px] md:mt-[85px]">
        <h3 className="section_title_46 max-w-[1000px] mx-auto">
          Elevate Your Biz Game with AI-driven Tools. Ditch Complexity, Embrace
          Effortless Efficiency.
          <span className="product-heading-gradient justify-between md:justify-center">
            {" "}
            Sign up for Smarter Work Vibes.{" "}
          </span>
        </h3>
        {/* ----- mocdt file button ------ */}
        <div className="flex w-[100%] justify-center mt-[32px]">
          <div className="block early_access_container_border_gradient">
            <button className="early_access_container flex justify-center max-w-[460px] mx-auto  ">
              <div className="early_access flex items-center text-[#fff] text-center  font_outfit">
                <Image
                  className="rounded-[15px] object-cover me-1 "
                  width={25}
                  height={15}
                  src={fileImage}
                  loading="lazy"
                  alt=""
                />

                <Link
                  href="https://mocdt.typeform.com/to/RaWbdtFM"
                  className="block"
                >
                  MOCDT FILE is now in private beta.{" "}
                  <span className="title_gradient_color font-[600] ps-[3px]">
                    {" "}
                    {/* <br className="block md:hidden " />  */}
                    Request Early Access
                  </span>
                </Link>
              </div>
            </button>
          </div>
        </div>

        {/* ---------- Mocdt file Image Container ------------- */}

        <div className="Mocdt-File-container-image w-[100%] mt-[62px] ">
          <div className="all-File flex  justify-center gap-x-[22px]">
            <div className=" block w-full md:w-[552px] ">
              <Image
                className="mocdt-file-image w-full rounded-[15px] object-cover "
                width={550}
                height={450}
                src={MocdtFile01}
                alt=""
                loading="lazy"
              />
              <div className="file-container relative  rounded-b-[15.632px]">
                <div className="block px-[20px] pb-[20px]">
                  <p className="product_description_17 py-[40px] text-center md:text-start">
                    Say goodbye to manual email responses and hello to
                    lightning-fast,stress-free communications with Mocdt Mail.
                  </p>
                  <div className="flex file-button md:h-[71px] h-[60px] hover:bg-[#202227b7] cursor-pointer">
                    <Link href="https://mocdt.typeform.com/to/RaWbdtFM">
                      <button className="file-button-text md:text-[20px] text-[16px]">
                        Request Early Access
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className=" block w-full md:w-[552px] ">
              <Image
                className="mocdt-file-image w-full rounded-[15px] object-cover "
                width={550}
                height={450}
                src={MocdtFile02}
                alt=""
                loading="lazy"
              />
              <div className="file-container relative  rounded-b-[15.632px]">
                <div className="block px-[20px] pb-[20px]">
                  <p className="product_description_17 py-[40px] text-center md:text-start">
                    You can upload and store you file organize with our advance
                    MocAI
                  </p>
                  <div className="flex file-button 2xl:mt-0 mt-6 md:h-[71px] h-[60px] hover:bg-[#202227b7] cursor-pointer">
                    <Link
                      href="https://mocdt.typeform.com/to/RaWbdtFM"
                      className="banner-gradient-btn banner-btn-font"
                    >
                      <button className="file-button-text md:text-[20px] text-[16px]">
                        Request Early Access
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
