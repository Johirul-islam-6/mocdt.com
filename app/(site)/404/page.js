import Image from "next/image";
import Image1 from "../../Assets/News/Frame (4).png";
import React from "react";

const page = () => {
  return (
    <div className=" max-w-screen-xl mx-auto section_padding">
      <div>
        <h1 className="page_title_64 ">Something Went Wrong!</h1>
      </div>

      <div className="flex justify-center section_padding">
        <Image
          height={750}
          width={770}
          src={Image1}
          alt="Something went wrong!"
        />
      </div>

      <div className="flex md:w-[60%] w-[100]  mx-auto ">
        <div className="gradient-rounded-div-left left-[0px]   "></div>
        <div className="gradient-rounded-div-right right-[400px]  "></div>
      </div>
    </div>
  );
};

export default page;
