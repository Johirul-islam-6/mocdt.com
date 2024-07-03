import Image from "next/image";
import "./Policy.css";
import "./Responsive.css";
import policy from "../../app/Assets/Policy/policy-image.png";
import { Policy } from "./Policy";
import { LastText } from "./LastText";

export const PolicyBanner = () => {
  return (
    <>
      <div className=" mt-32 md:mt-28 mb-16">
        <div>
          {/* --------------------- Banner section ---------------- */}
          <div className="policy-banner flex justify-center items-center ">
            {/* ------------ gradient div------- */}
            <div className="flex justify-between">
              <div className="story-gradient-rounded-left top-[500px] left-[0px] "></div>
              <div className="story-gradient-rounded-right top-[500px]  right-[0px] "></div>
            </div>

            <div className="policy-banner-container  flex md:flex-row flex-col md:gap-x-[30px] justify-between items-center md:px-[50px] px-[10px]">
              <div className="policy-left-container w-[60%] flex justify-center items-center ">
                <div>
                  <h1 className="policy-title-40 ">
                    The information we gather, its purpose, and our commitment
                    to safeguarding it with trusted partners
                  </h1>
                  <p className="policy-paragrap-20 pt-3">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Ipsa provident cumque facere recusandae optio minima culpa
                    nihil, quas necessitatibus pariatur minus similique quidem
                    adipisci in error excepturi nulla magni dignissimos!
                  </p>
                  <div className="banner-button-box flex flex-wrap mt-8 gap-5">
                    <button className="py-[15px] px-8 button-border text-white cursor-pointer">
                      View past request
                    </button>
                    <button className="py-[15px] px-8 button-border text-white cursor-pointer">
                      Make a Policy request
                    </button>
                  </div>
                </div>
              </div>

              <div className="policy-right-container w-[37%] h-[500px]  flex justify-center items-center ">
                <div className="policy-image flex items-center md:mb-[80px] ">
                  <Image
                    src={policy}
                    className="object-cover"
                    alt="policy"
                    width={580}
                    height={480}
                    loading="lazy"
                    placeholder="blur"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ----------------------- flex container 2end -------------------- */}

          <div className="mt-[60px] ">
            <div className=" pribicy-box-container flex flex-col md:gap-x-[20px] md:flex-row justify-center items-start relative">
              <div className="policy-box w-[40%] flex justify-center items-center">
                <div>
                  <div className="flex justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="86"
                      height="75"
                      viewBox="0 0 86 75"
                      fill="none"
                    >
                      <g filter="url(#filter0_d_341_809)">
                        <path
                          d="M55.3072 42.039L55.3109 42.0357L62.6255 35.6938C62.6262 35.6931 62.627 35.6924 62.6278 35.6917C62.9955 35.3681 63.4798 35.332 63.8587 35.4716C64.2389 35.6118 64.5988 35.9678 64.5988 36.49V41.982C64.5988 41.9884 64.5998 41.9919 64.6016 41.9957C64.6035 41.9998 64.6101 42.0118 64.6297 42.0292L64.6302 42.0296L68.6547 45.599L55.3072 42.039ZM55.3072 42.039C54.8161 42.4733 54.8161 43.2069 55.3072 43.6413L55.3106 43.6443L81.4645 66.3546C81.4649 66.3549 81.4653 66.3553 81.4657 66.3556C81.4972 66.3838 81.4996 66.4008 81.4996 66.4009C81.5001 66.4032 81.501 66.4096 81.4955 66.4214C81.4859 66.4417 81.4425 66.5 81.319 66.5H75.5752C75.5058 66.5 75.4613 66.4769 75.4408 66.4587L75.4373 66.4557L48.2855 42.8922C48.2851 42.8919 48.2847 42.8915 48.2843 42.8912C48.2694 42.8777 48.2624 42.8663 48.2591 42.859C48.2573 42.8552 48.2562 42.8517 48.2555 42.8485C48.2549 42.8454 48.2546 42.8426 48.2546 42.8401C48.2546 42.8351 48.2556 42.8288 48.2591 42.8212C48.2624 42.814 48.2694 42.8025 48.2843 42.789C48.2847 42.7887 48.2851 42.7884 48.2855 42.788L68.6624 25.099L68.6658 25.096M55.3072 42.039L68.6658 25.096M68.6658 25.096C68.7165 25.0511 68.7994 25.0334 68.8864 25.0664C68.9271 25.0818 68.9522 25.1032 68.9643 25.1186C68.9737 25.1306 68.9767 25.1397 68.9767 25.1529V45.5518C68.9767 45.5628 68.9746 45.5695 68.9661 45.5801M68.6658 25.096L68.9661 45.5801M68.9661 45.5801C68.9547 45.5943 68.9295 45.6157 68.887 45.6312M68.9661 45.5801L68.887 45.6312M68.887 45.6312C68.7957 45.6644 68.7075 45.6453 68.6552 45.5994L68.887 45.6312ZM30.6883 42.0488L30.6849 42.0458L23.37 35.6938C23.3693 35.6932 23.3686 35.6926 23.368 35.692C23.0002 35.3682 22.5158 35.332 22.1368 35.4716C21.7566 35.6118 21.3966 35.9678 21.3966 36.49V41.9798C21.3962 41.9812 21.3953 41.9841 21.3931 41.9885C21.3879 41.9991 21.3768 42.0166 21.3558 42.038L17.3296 45.599C17.2763 45.6462 17.1908 45.6635 17.1047 45.6318C17.0645 45.617 17.0406 45.5965 17.0297 45.5828C17.0215 45.5725 17.0188 45.5649 17.0188 45.5518V25.1529C17.0188 25.1397 17.0217 25.1306 17.0312 25.1186C17.0432 25.1032 17.0683 25.0818 17.1091 25.0664C17.196 25.0334 17.2789 25.0511 17.3296 25.096L17.3329 25.0988L37.6989 42.7978C37.6993 42.7982 37.6996 42.7985 37.6999 42.7988C37.715 42.8123 37.7221 42.8239 37.7254 42.8312C37.729 42.8389 37.7297 42.8448 37.7297 42.8487C37.7297 42.8526 37.729 42.8567 37.7268 42.8614C37.7247 42.8658 37.7196 42.8745 37.7069 42.8853L37.7068 42.8853L37.7023 42.8892L10.5691 66.4558L10.5658 66.4587C10.548 66.4745 10.4938 66.5 10.4313 66.5H4.66537C4.55318 66.5 4.51458 66.4473 4.50509 66.4264C4.49931 66.4137 4.49953 66.4049 4.50062 66.3995C4.50125 66.3964 4.50474 66.3793 4.53279 66.353L30.6803 43.6481C30.6811 43.6475 30.682 43.6468 30.6828 43.6461C31.1869 43.2164 31.1737 42.4781 30.6883 42.0488ZM42.8487 47.5181L42.8522 47.5151C42.9291 47.447 43.0552 47.447 43.1322 47.5151L43.1357 47.5182L64.8431 66.3546C64.8435 66.3549 64.8439 66.3552 64.8442 66.3556C64.875 66.3831 64.8783 66.4002 64.8785 66.4016L64.8785 66.4017C64.8787 66.4027 64.879 66.4041 64.879 66.4061C64.8789 66.41 64.878 66.4158 64.8743 66.4239C64.8643 66.4455 64.8226 66.5 64.7087 66.5H58.9317C58.869 66.5 58.8161 66.4807 58.7746 66.4487L43.7914 53.4319L43.7914 53.4319L43.7867 53.428C43.3341 53.0443 42.6503 53.0443 42.1976 53.428L42.1976 53.428L42.193 53.4319L27.2016 66.4558L27.1983 66.4587C27.1831 66.4722 27.1304 66.5 27.0527 66.5H21.2868C21.1746 66.5 21.136 66.4473 21.1265 66.4264C21.1207 66.4137 21.1209 66.4049 21.122 66.3995C21.1227 66.3964 21.1261 66.3794 21.1541 66.353L42.8487 47.5181ZM76.2618 52.3369L76.2613 52.3365C76.2568 52.3324 76.2517 52.3261 76.2476 52.3169C76.2434 52.3074 76.2416 52.2976 76.2416 52.2893V11.9329C76.2416 11.4131 75.8789 11.0593 75.5036 10.919C75.1268 10.7782 74.6405 10.8088 74.2701 11.135C74.2695 11.1356 74.2689 11.1361 74.2682 11.1367L43.1401 38.1681C43.1396 38.1685 43.1391 38.1689 43.1386 38.1694C43.0593 38.2351 42.9251 38.2351 42.8458 38.1694C42.8453 38.1689 42.8447 38.1685 42.8442 38.1681L11.7272 11.1367C11.7266 11.1361 11.726 11.1356 11.7254 11.135C11.355 10.8088 10.8686 10.7782 10.4919 10.919C10.1165 11.0593 9.75389 11.4131 9.75389 11.9329V52.2893C9.75389 52.2974 9.75213 52.3044 9.74973 52.3096C9.74764 52.3142 9.74469 52.3183 9.73942 52.3226L9.73055 52.3298L9.72202 52.3374L5.70097 55.9134C5.64986 55.956 5.56039 55.9754 5.46573 55.9409C5.42155 55.9248 5.39576 55.903 5.38454 55.8892C5.37633 55.8791 5.37605 55.875 5.37605 55.8689V0.595866C5.37605 0.582788 5.37879 0.575191 5.38696 0.564894C5.39787 0.551144 5.42174 0.530653 5.46198 0.515822C5.54801 0.48412 5.63351 0.501474 5.68689 0.548686L5.68688 0.548701L5.69026 0.55164L42.193 32.2581L42.193 32.2581L42.1976 32.2621C42.6503 32.6457 43.3341 32.6457 43.7867 32.2621L43.7868 32.2621L43.7913 32.2582L80.3051 0.55169L80.3052 0.551705L80.3086 0.548686C80.3631 0.500413 80.4457 0.48516 80.5261 0.515144C80.564 0.529293 80.5866 0.548855 80.597 0.562199C80.6049 0.572241 80.6083 0.580729 80.6083 0.595866V55.8689C80.6083 55.8725 80.6081 55.8754 80.6072 55.8784C80.6061 55.8823 80.6038 55.8863 80.5994 55.8918C80.5887 55.9052 80.5643 55.9261 80.5224 55.9416C80.4331 55.9745 80.3465 55.9568 80.2944 55.9133C80.2938 55.9128 80.2931 55.9123 80.2925 55.9117L76.2618 52.3369Z"
                          fill="url(#paint0_linear_341_809)"
                          stroke="url(#paint1_linear_341_809)"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_341_809"
                          x="0"
                          y="0"
                          width="86"
                          height="75"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_341_809"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_341_809"
                            result="shape"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_341_809"
                          x1="5.49781"
                          y1="1.4308"
                          x2="65.2225"
                          y2="71.3958"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#A5FFC7" />
                          <stop offset="0.263542" stop-color="#9DFFCD" />
                          <stop offset="0.529167" stop-color="#D9FFE4" />
                          <stop offset="1" stop-color="#8DDAF1" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_341_809"
                          x1="43"
                          y1="0"
                          x2="43"
                          y2="67"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#FFD770" />
                          <stop offset="0.276042" stop-color="#FF70AC" />
                          <stop offset="0.552083" stop-color="#EB70FF" />
                          <stop offset="0.770833" stop-color="#9E70FF" />
                          <stop offset="1" stop-color="#70B8FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h1 className="mocdt-box-title-32 py-3">
                    Mocdt Privacy Policy
                  </h1>
                  <p className="mocdt-box-paragrap-24">
                    Effective Date:December 6, 2022
                  </p>
                </div>
              </div>
              {/* --------------- Text container Box ----------- */}
              <div className="policy-title-box block h-[900px] w-[63%]  ">
                <div className="scrollbar overflow-y-auto h-[889px] flex ">
                  <div className=" block">
                    <Policy />
                    <LastText />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
