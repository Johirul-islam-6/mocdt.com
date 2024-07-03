import "./Discover.css";
import DiscoverContent from "./DiscoverContent";
import Workflow from "./Workflow";

const Discover = () => {
  return (
    <div className="discover_bg mt-[80px] md:mt-[120px] py-8 px-8">
      <h2 className="section_title_36 title_gradient_color pb-10 text-center">
        Discover The Key Values and Principles That Fuel Our Passion
      </h2>

      <div className="flex xl:flex-row flex-col items-center gap-10 xl:gap-4">
        <div className="xl:w-[45%]">
          <DiscoverContent />
        </div>
        <div className="xl:w-[55%]">
          <div className="relative mt-5 hidden md:flex justify-end   items-center ">
            <div className="block">
              <div className=" gradient-rounded-div-top top-0  left-[120px]"></div>
              <div className="gradient-rounded-div-bottom top-[200px] left-[170px]"></div>
            </div>
          </div>

          <div className="relative z-[1000]">
            <Workflow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
