import "./Moki.css";

export const MokiBanner = () => {
  return (
    <>
      <div className=" section_padding pb-20">
        {/* ---------------top banner Content title ------------- */}

        <div className="">
          {/* ------------ gradient div------- */}
          <div className="flex justify-between">
            <div className="story-gradient-rounded-left top-[650px] left-[0px] "></div>
            <div className="story-gradient-rounded-right top-[650px]  right-[0px] "></div>
          </div>

          <div className="flex w-[100%] justify-center mx-auto">
            <div className="block early_access_container_border_gradient">
              <button className="early_access_container flex justify-center mx-auto  ">
                <h1 className="moki-top-button-text text-center text-[#D6D6D6] ">
                  Transform your work life by minimizing screen time like never
                  before!
                </h1>
              </button>
            </div>
          </div>

          <h1 className="page_title_64 title_gradient_color mt-[50px]">
            Get everyday tasks done
            <br className="hidden xl:block" /> with just your voice.
          </h1>

          <div className="flex flex-wrap justify-center items-center gap-y-5 gap-x-10 mt-[60px] relative z-50">
            <div className="flex justify-center ">
              <a
                href="https://mocdt.typeform.com/join-waitlist"
                target="_blank"
                rel="noreferrer"
              >
                <button className="banner_button  ">Join the Waitlist</button>
              </a>
            </div>
            {/* <div className="flex justify-center ">
              <a
                href="https://mocdt.typeform.com/join-waitlist"
                target="_blank"
                rel="noreferrer"
              >
                <button className="moki-x-btn ">PRE ORDER MOKI X</button>
              </a>
            </div> */}
          </div>

          <p className="moki-paragrap-18  pt-[60px] md:w-[800px] mx-auto">
            With Moki, you can complete your day-to-day tasks just by talking!
            From sending emails and setting reminders, to learn about your
            company update, Moki can do it all. Simply say "Moki" or "Hey Moki"
            and ask away; our voice assistant is ready to serve.
          </p>
        </div>
      </div>
    </>
  );
};
