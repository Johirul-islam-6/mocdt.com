import Image from "next/image";
import mail from "../../app/Assets/mail.svg";
const SubscribeButton = () => {
  return (
    <div className="relative flex items-center   ">
      {/* <div className=" md:w-[54px] md:h-[54px] pointer-events-none absolute left-[24px] sm:left-2 flex justify-center items-center">
        <Image src={mail} alt="" />
      </div>

      <div className="flex">
        <input
          type="email"
          className="pl-12 md:pl-16 md:h-16 py-[13px] px-[40px] md:py-[24px] md:px-12  w-[220px] sm:w-[300px] md:w-[400px] lg:w-[600px]  placeholder-[#57656C] text-[10px] md:text-[14px]   text-[#57656C] h-full  bg-black border-none ring-1 ring-[#414548]  rounded-lg outline-none ml-4 sm:m-0"
          placeholder="Enter your email address to get latest updates"
        />
        <div className="">
          <div className="relative right-4 bottom-[1px] md:bottom-0 subscribe-button w-[50px] sm:w-[100px] md:w-[150px] lg:w-[200px] h-full  py-[13px] px-[40px] md:py-[24px] md:px-12 ">
            <span className="title_gradient_color text-[10px] md:text-[16px] leading-[14px] tracking-[0.14px] ">
              Subscribe
            </span>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default SubscribeButton;
