import "./careerBanner.css";

export const CareersBanner = () => {
  return (
    <>
      {/* ------------ gradient div------- */}

      <div className="banner py-10">
        <div className="flex justify-between ">
          <div className="gradient-rounded-div-left left-[0px] "></div>
          <div className="gradient-rounded-div-right right-[0px]  "></div>
        </div>
        <h1 className="page_title_64 mt-[40px] md:mt-[120px]">
          Join Mocdt and Empower Tech <br className="hidden md:block" />{" "}
          Globally with Your Ambitions
        </h1>

        <div className="flex justify-center pt-[40px] md:pt-[72px]">
          <a href="https://www.linkedin.com/company/mocdt/jobs/" target="_blank" >
          <button className="banner_button  ">See all open positions</button>
          </a>
        
        </div>
      </div>
    </>
  );
};
