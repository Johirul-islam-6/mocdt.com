import Banner from "@/Components/Banner/Banner";
import { Product } from "@/Components/Products/Product";
import Partners from "@/Components/Partners/Partners";
import { LifeMocdt } from "@/Components/LifeMocdt/LifeMocdt";
import { Hero } from "@/Components/Hero/Hero";

import dynamic from "next/dynamic";

const ProductSlider = dynamic(() => import('@/Components/Products/ProductSlider'))
const Mockie = dynamic(() => import('@/Components/Mockie/Mockie'))
const Discover = dynamic(() => import('@/Components/Discover/Discover'))
const BottomBanner = dynamic(() => import('@/Components/BottomBanner/BottomBanner'))
// const LifeMocdt = dynamic(() => import('@/Components/LifeMocdt/LifeMocdt'))



export default function Home() {
  return (
    <>
      <div className="  bg-[#0A0A0A] overflow-hidden xl:overflow-visible  relative ">
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          <Product />
        </div>

        <ProductSlider />

        <div className="max-w-screen-xl mx-auto">
          <Mockie />
        </div>
        <Partners />

        <div className="max-w-screen-xl mx-auto">
          <Discover />

          <Hero />
        </div>
        <div className="max-w-screen-xl mx-auto">
          <LifeMocdt />
          <BottomBanner />
        </div>
      </div>
    </>
  );
}
