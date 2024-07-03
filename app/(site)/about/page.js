import { Abouts } from "@/Components/About/Abouts";
import "../career/SearchBar.css";
// import ProductSlider from "@/Components/Products/ProductSlider";
import SecondProducts from "@/Components/smallProduct/SecondProducts";
import SubscribeButton from "@/Components/SubscribeButton/SubscribeButton";
import { CoreValuesMocdt } from "@/Components/About/CoreValuesMocdt";
import { AiMocdt } from "@/Components/About/AiMocdt";
import { BenefitsMocdt } from "@/Components/About/BenefitsMocdt";

const About = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto ">
        <Abouts />
        <AiMocdt/>
        <BenefitsMocdt/>

        <CoreValuesMocdt/>
      </div>

    
    </>
  );
};

export default About;
