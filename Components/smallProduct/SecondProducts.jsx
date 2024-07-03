"use client"
import "./SmallProducts.css";
import SmallProductSlider from "./SmallProductSlider";
import { useSwiper } from 'swiper/react'

const SecondProducts = () => {

  return (
    <div className="md:section_padding sm:mb-14 md:mb-28">
      <h3 className="section_title_28  pb-[80px] text-center explore_text_color">
        Explore more{" "}
        <span className="title_gradient_color">Mocdt Products</span>
      </h3>
     
   
      <SmallProductSlider />
    </div>
  );
};

export default SecondProducts;
