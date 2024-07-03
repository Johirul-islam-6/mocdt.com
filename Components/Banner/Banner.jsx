import Link from "next/link";
import "./Banner.css";

const Banner = () => {
  return (
    <>
      <div className=" section_padding pb-20">
        {/* ---------------top banner Content title ------------- */}

        <div className="">
          {/* ------------ gradient div------- */}
          <div className="flex justify-between">
            <div className="gradient-rounded-div-left left-[0px] "></div>
            <div className="gradient-rounded-div-right right-[0px] "></div>
          </div>

          <h1 className="page_title_64 title_gradient_color">
            Unlock Your Greatest Potential
            <br className="hidden xl:block" /> with Mocdt Revolutionary Work
            <br className="hidden xl:block" /> Efficiency Tools.
          </h1>

          <div className="flex justify-center pt-[50px]">
            <Link href="https://mocdt.typeform.com/join-waitlist">
              <button className="banner_button  ">Join the Waitlist</button>
            </Link>
          </div>
          {/* ----------------------- image ---------------- */}

          <div className=" h-[auto] flex justify-center  mt-[43px]">
            <video
              className="rounded-[10px] md:rounded-[15px] object-cover pointer-events-none"
              width={945}
              height={690}
              autoPlay
              loop
              muted
              playsInline
              controls={false}
            >
              <source src="/mocdt_main_video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
