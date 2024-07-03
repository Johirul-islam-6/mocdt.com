import Image from "next/image";
import Image1 from "@/app/Assets/News/Frame (4).png";
import React from "react";

const NotFound = () => {
  return (

    <div className=' max-w-screen-xl mx-auto section_padding'>

<div className="flex justify-between">
            <div className="gradient-rounded-div-left left-[0px] "></div>
            <div className="gradient-rounded-div-right right-[0px] "></div>
          </div>

      <div>
        <h1 className="page_title_64 ">Something Went Wrong!</h1>
      </div>

      <div className="flex justify-center section_padding">
        <Image
          height={400}
          width={400}
          src={Image1}
          alt="Something went wrong!"
        />
      </div>


    </div>
  );
};

export default NotFound;
