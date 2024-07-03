import "./Footer.css";
import logo from "@/app/Assets/logo.svg";
// import mocdtLogo from "../../Assets/mocdtLOGO.png";
// import youtube from "../../Assets/youtube.svg";
// import facebook from "../../Assets/facebook.svg";
// import twitter from "../../Assets/twitter.svg";
// import linkedin from "../../Assets/linkedin.svg";

// import CookiesButton from "../CookiesButton/CookiesButton";
import Image from "next/image";
import Link from "next/link";
import StatusWidget from "./StatusWidget";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="">
      <div className=" mx-auto mt-5  md:p-2  flex flex-col  md:gap-10  overflow-hidden 2xl:overflow-visible">
        {/* <div className="flex justify-between items-center mx-1 mt-2 md:p-0 md:m-0">
          <div>
            <Image src={mocdtLogo} alt="" className="" />
          </div>
          <div>
            <button className="bg-black py-2 px-6 rounded-xl btn-hover text-white">
              <span className=" font-outfit tracking-wide font-[350] ">
                Join the wait list
              </span>
            </button>
          </div>
        </div> */}

        <div>
          <div className="md:mt-8">
            <div className="mx-auto w-full  ">
              <div className="relative mt-5 block md:flex justify-end bg-red-400 items-center ">
                <div className="block">
                  <div className="gradient-rounded-div-bottom  bottom-[-180px] left-[110px] rounded-blur"></div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
                <div
                  className="mx-auto"
                  style={{
                    zIndex: "10",
                  }}
                >
                  <h2 className="mb-6 text-[13px] sm:text-base font-[500] leading-[14px] text-[white] uppercase">
                    Our Products
                  </h2>
                  <ul className="text-[#9B9B9B] text-[11px] sm:text-sm font-light">
                    <li className="mb-4">
                      <Link
                        href="https://authenticator.mocdt.com/"
                        className=" hover:underline"
                      >
                        Mocdt authenticator
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="https://cdo.mocdt.com/"
                        className=" hover:underline"
                      >
                        Mocdt cdo
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="https://explore.mocdt.com/"
                        className=" hover:underline"
                      >
                        Mocdt Explore
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="https://calendar.mocdt.com/"
                        className="hover:underline"
                      >
                        Mocdt Calendar
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="https://email.mocdt.com/"
                        className="hover:underline"
                      >
                        Mocdt Mail
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="https://file.mocdt.com/"
                        className="hover:underline"
                      >
                        Mocdt Files
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="https://dns.mocdt.com/"
                        className="hover:underline"
                      >
                        Mocdt dns
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="https://analytics.mocdt.com/"
                        className="hover:underline"
                      >
                        Mocdt Analytics
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="https://workspace.mocdt.com/"
                        className="hover:underline"
                      >
                        Mocdt Workspace
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="https://mocdt.com/moki"
                        className="hover:underline"
                      >
                        Mocdt Moki
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mx-auto">
                  <h2 className="mb-6 text-[13px] sm:text-base font-[500] leading-[14px] text-[white] uppercase">
                    Company
                  </h2>
                  <ul className="text-[#9B9B9B] text-[11px] sm:text-sm font-light">
                    <li className="mb-4">
                      <Link href="/about" className=" hover:underline">
                        About Us
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/newsroom" className="hover:underline">
                        Newsroom
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/career" className="hover:underline">
                        Career
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/contact" className="hover:underline">
                        Contact Us
                      </Link>
                    </li>
                    {/* <li className="mb-4">
                      <Link href="/investor" className="hover:underline">
                        Investor
                      </Link>
                    </li> */}
                    <li className="mb-4">
                      <Link href="/sitemap" className="hover:underline">
                        Sitemap
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="https://mocdt.typeform.com/to/sP50jwkJ"
                        className="hover:underline"
                      >
                        Report
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="mx-auto">
                  <h2 className="mb-6 text-[13px] sm:text-base font-[500] leading-[14px] text-[white] uppercase">
                    Legal Section
                  </h2>
                  <ul className="text-[#9B9B9B] text-[11px] sm:text-sm font-light">
                    <li className="mb-4">
                      <Link href="/gdpr" className=" hover:underline">
                        GDPR
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/policy" className="hover:underline">
                        Privacy Policy
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link href="/terms" className="hover:underline">
                        Terms of Use
                      </Link>
                    </li>
                  </ul>
                </div>
                <div
                  className="mx-auto"
                  style={{
                    zIndex: "10",
                  }}
                >
                  <h2 className="mb-6 text-[13px] sm:text-base font-[500] leading-[14px] text-[white] uppercase">
                    Program
                  </h2>
                  <ul className="text-[#9B9B9B] text-[11px] sm:text-sm font-light">
                    <li className="mb-4">
                      <Link href="/coming" className=" hover:underline">
                        Startup program
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="https://mocdt.com/coming"
                        className="hover:underline"
                      >
                        Creator program
                      </Link>
                    </li>
                    <li className="mb-4">
                      <Link
                        href="https://mocdt.typeform.com/to/Ag7xhOUl"
                        className="hover:underline"
                      >
                        Developer program
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-end  relative bottom-64 md:bottom-16 right-36 ">
                <div className="relative mt-5 block md:flex justify-end bg-red-400 items-center ">
                  <div className="block">
                    <div className="gradient-rounded-div-bottom  lg:bottom-[-80px] lg:right-[-60px] rounded-blur"></div>
                  </div>
                </div>
              </div>

              <div
                className="flex justify-center sm:justify-end items-center relative bottom-5 md:bottom-16 sm:right-20 "
                style={{
                  zIndex: "10",
                }}
              >
                <div className="flex sm:flex-row flex-col-reverse items-center justify-center gap-2">
                  <StatusWidget />
                  <div className="footer-logo-bg px-7 relative top-[-8px]">
                    <Link href="/">
                      <Image src={logo} className="h-11 " alt="mocdt logo" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
