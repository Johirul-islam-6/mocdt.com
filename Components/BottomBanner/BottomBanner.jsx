import React from "react";
import "./BottomBanner.css";
import Image from "next/image";
import bottomImage from "../../app/Assets/BottomBg.png";
import SubscribeButton from "../SubscribeButton/SubscribeButton";

const BottomBanner = () => {
  return (
    <div className="section_padding">
      <div className="flex flex-col w-full items-center gap-10">
        <div>
          <Image
            src={bottomImage}
            alt="mocdt products"
            className="w-full h-full"
            loading="lazy"
          />
        </div>
        {/*         
        <div>
          <SubscribeButton />
        </div> */}
      </div>
    </div>
  );
};

export default BottomBanner;
