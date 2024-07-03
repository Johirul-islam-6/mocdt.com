import Image from "next/image";
import Image1 from "../../../app/Assets/career/career-01.png";
import Image2 from "../../../app/Assets/career/career-02.png";
import Image3 from "../../../app/Assets/career/career-03.png";
import Img1 from "../../../app/Assets/career/find-place-icon/01.png";
import Img2 from "../../../app/Assets/career/find-place-icon/02.png";
import Img3 from "../../../app/Assets/career/find-place-icon/03.png";
import Img4 from "../../../app/Assets/career/find-place-icon/04.png";
import Img5 from "../../../app/Assets/career/find-place-icon/05.png";
import Img6 from "../../../app/Assets/career/find-place-icon/06.png";
import Img7 from "../../../app/Assets/career/find-place-icon/07.png";

import './container.css'

export const Containers = () => {
  return (
    <>
      <div className="md:mt-[20px] mt-[40px] pb-[80px]">
        {/* --------- row -1 ------ */}
        <div className="section_padding flex flex-col md:gap-[70px] lg:flex-row justify-between items-center ">
          <div className="container-banner w-full  lg:w-[50%]">
            <h1 className="container-title-28 text-center md:text-start">
              Future of “Office Life”
            </h1>
            <p className="container-paragrap-16 pt-8 text-center md:text-start">
              We know that great work comes from our people, not a place. That’s
              why we’ve adapted new ways to work together - even when we are
              apart. And, with our home-office stipend, we cover the costs to
              bring the office equipment to you so you can focus on your best
              work.
            </p>
          </div>

          <div className="container-banner w-full md:w-[50%] relative mt-5 justify-center flex items-center">
            <div className="block ">
              <div className=" gradient-rounded-div-top background_color_animation top-0 right-[220px]"></div>
              <div className="gradient-rounded-div-bottom background_color_animation bottom-[80px] right-[220px]"></div>
            </div>
            <Image
              className=" object-cover relative z-50"
               width={498}
              height={400}
              src={Image1}
              alt=""
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>
        {/* --------- row -2 ------ */}
        <div className="section_padding flex flex-col-reverse md:gap-[70px] lg:flex-row justify-between items-center my-[80px] md:my-[20px]">
          <div className="container-banner w-full md:w-[50%] relative mt-5 justify-center flex items-center">
            <div className="block ">
              <div className=" gradient-rounded-div-top background_color_animation top-0 right-[220px]"></div>
              <div className="gradient-rounded-div-bottom background_color_animation bottom-[80px] right-[220px]"></div>
            </div>
            <Image
              className=" object-cover relative z-50 "
              width={498}
              height={400}
              src={Image2}
              alt=""
              quality={100}
              placeholder="blur"
            />
          </div>

          <div className="container-banner w-full  lg:w-[50%]">
            <h1 className="container-title-28 text-center md:text-start">
              Development & Learning.
            </h1>
            <p className="container-paragrap-16 pt-8 text-center md:text-start">
              If you’re looking to learn new things or develop existing skills,
              we’re happy to help. We reimburse full time employees who attend
              professional conferences or take courses to improve their careers.
              So, if you’re ready to learn, we’re ready to play.
            </p>
          </div>
        </div>

        {/* --------- row -3 ------ */}
        <div className="section_padding flex flex-col md:gap-[70px] lg:flex-row justify-between items-center ">
          <div className="container-banner w-full  lg:w-[50%]">
            <h1 className="container-title-28 text-center md:text-start">
              Benefits & Beyond
            </h1>
            <p className="container-paragrap-16 pt-8 text-center md:text-start">
              At our company, we believe that the work should have perks. That’s
              why we offer our employees plenty of paid time off. We also offer
              generous retirement and stock options, as well as 12 weeks of paid
              paternity/maternity leave. Plus, we have disability and life
              insurance to help protect you and your family in case of an
              emergency.
            </p>
          </div>

          <div className="container-banner w-full md:w-[50%] relative mt-5 justify-center flex items-center">
            <div className="block ">
              <div className=" gradient-rounded-div-top background_color_animation top-0 right-[220px]"></div>
              <div className="gradient-rounded-div-bottom background_color_animation bottom-[80px] right-[220px]"></div>
            </div>
            <Image
              className=" object-cover relative z-50 "
              width={498}
              height={400}
              src={Image3}
              alt=""
              quality={100}
              placeholder="blur"
            />
          </div>
        </div>

        {/* --------- place ----- */}


    {/* --------- find  place section ----- */}

    <div className=" mt-[140px] md:mt-[190px]">
      <h1 className="find-heading-40 md:w-[300px] mx-auto">Find Your Place</h1>
 
      <div className=" flex flex-wrap justify-center items-center gap-x-[40px] gap-y-[50px]  my-[45px]  w-[100%]">

        <div className="w-[240px] ">

            <Image className="object-cover " src={Img1} 
              width={238}
              height={238}
               alt=""
              quality={100}
              placeholder="blur" 
               />
                <p className="place-paragrap-20  w-[220px] mx-auto -mt-6"> Engineering &  Technology </p>

          </div>

        <div className="w-[240px] ">

            <Image className="object-cover " src={Img2} 
              width={238}
              height={238}
               alt=""
              quality={100}
              placeholder="blur" 
               />
                <p className="place-paragrap-20  w-[220px] mx-auto -mt-6"> Sales, Service & Support </p>

          </div>


        <div className="w-[240px] ">

            <Image className="object-cover " src={Img3} 
              width={238}
              height={238}
               alt=""
              quality={100}
              placeholder="blur" 
               />
                <p className="place-paragrap-20  w-[240px] mx-auto -mt-6"> Marketing & Communications </p>

          </div>


        <div className="w-[240px] ">

            <Image className="object-cover " src={Img4} 
              width={238}
              height={238}
               alt=""
              quality={100}
              placeholder="blur" 
               />
                <p className="place-paragrap-20  w-[240px] mx-auto -mt-6"> Design & Branding</p>

          </div>


        <div className="w-[240px] ">

            <Image className="object-cover " src={Img5} 
              width={238}
              height={238}
               alt=""
              quality={100}
              placeholder="blur" 
               />
                <p className="place-paragrap-20  w-[240px] mx-auto -mt-6"> Video & Animation </p>

          </div>


        <div className="w-[240px] ">

            <Image className="object-cover " src={Img6} 
              width={238}
              height={238}
               alt=""
              quality={100}
              placeholder="blur" 
               />
                <p className="place-paragrap-20  w-[240px] mx-auto -mt-6"> Cyber Security & Data Protection </p>

          </div>

        <div className="w-[240px] ">

            <Image className="object-cover " src={Img7} 
              width={238}
              height={238}
               alt=""
              quality={100}
              placeholder="blur" 
               />
                <p className="place-paragrap-20  w-[240px] mx-auto -mt-6"> Blockchain & Cryptocurrency</p>

          </div>


      </div>
  
    </div>


    </div>

    
    
    </>
  );
};
