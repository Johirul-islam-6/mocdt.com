import Image from "next/image";
import React from "react";
import Image1 from "../../Assets/News/Frame 1707478130.png";
import "./coming.css";

const page = () => {
  return (
    <div className=" max-w-screen-xl mx-auto section_padding">
      <div>
        <h1 className="title-coming">MOCDT Startup Program</h1>
      </div>

      <div className="flex justify-center section_padding">
        <Image
          className="mt-10"
          height={570}
          width={680}
          src={Image1}
          alt="MOCDT Startup Program"
        />
      </div>

      <div className="flex justify-between">
        <div className="gradient-rounded-div-left left-[0px] "></div>
        <div className="gradient-rounded-div-right right-[200px] "></div>
      </div>
    </div>
  );
};

export default page;
