import dynamic from "next/dynamic";
import React from "react";
// import PartnerSlider from "./PartnerSlider";

const PartnerSlider = dynamic(() => import("./PartnerSlider"));

const Partners = () => {
  return (
    <div className=" pt-[80px] md:pt-[120px] ">
      <h2 className="section_title_24 text-[#979797] pb-6 md:pb-10 max-w-screen-xl mx-auto">
        Trusted by Renowned Brands Across the Globe
      </h2>

      <PartnerSlider />
    </div>
  );
};

export default Partners;
