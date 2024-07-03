/* eslint-disable react/prop-types */
"use client";
import logo from "@/app/Assets/logo.svg";
import dropdown from "@/app/Assets/dropdown.svg";
import "./Navbar.css";

import { useState } from "react";

import { usePathname } from "next/navigation";

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import Link from "next/link";
import Image from "next/image";

import mail from "@/app/Assets/Logo/mailLogo.png";
import auth from "@/app/Assets/Logo/authenticator.png";
import calender from "@/app/Assets/Logo/calender.png";
import analytics from "@/app/Assets/Logo/analytics.png";
import cdo from "@/app/Assets/Logo/cdo.png";
import dns from "@/app/Assets/Logo/dns.png";
import workspace from "@/app/Assets/Logo/workspace.png";
import explore from "@/app/Assets/Logo/explore.png";
import files from "@/app/Assets/Logo/files.png";
import moki from "@/app/Assets/Logo/moki.png";
import dynamic from "next/dynamic";

const MobileDrawer = dynamic(() => import("./MobileDrawer"));

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const pathname = usePathname();
  const [openRight, setOpenRight] = useState(false);

  const openDrawerRight = () => setOpenRight(true);
  const closeDrawerRight = () => setOpenRight(false);

  const navListMenuItems = [
    {
      title: "Mocdt Mail",
      route: "https://email.mocdt.com/",
      icon: mail,
    },
    {
      title: "Mocdt Authenticator",
      route: "https://authenticator.mocdt.com/",
      icon: auth,
    },
    {
      title: "Mocdt Calendar",
      route: "https://calendar.mocdt.com/",
      icon: calender,
    },

    {
      title: "Mocdt File",
      route: "https://file.mocdt.com/",
      icon: files,
    },
    {
      title: "Mocdt Workspace",
      route: "https://workspace.mocdt.com/",
      icon: workspace,
    },
    {
      title: "Mocdt Explore",
      route: "https://explore.mocdt.com/",
      icon: explore,
    },
    {
      title: "Mocdt DNS",
      route: "https://dns.mocdt.com/",
      icon: dns,
    },
    {
      title: "Mocdt Analytics",
      route: "https://analytics.mocdt.com/",
      icon: analytics,
    },
    {
      title: "Mocdt C DO",
      route: "https://cdo.mocdt.com/",
      icon: cdo,
    },
    {
      title: "Mocdt Moki",
      route: "https://mocdt.com/moki",
      icon: moki,
    },
  ];

  const navlist = (
    <>
      <ul className="hidden ml:flex flex-col p-4 ml:px-4 ml:py-2 mt-4 text-sm nav-border ml:flex-row ml:space-x-4 lg:space-x-8 ml:mt-0  text-[#ffffff80]  relative transition  ease-in-out ">
        <li>
          <Link
            href="/"
            className="block py-2 pl-3 pr-4  rounded ml:bg-transparent stroke  ml:py-1 ml:px-2 hover:text-white"
            aria-current="page"
            id={pathname === "/" ? "active-nav" : ""}
          >
            Home
          </Link>
        </li>
        <li className="">
          <Menu>
            <MenuHandler>
              <Link
                href="/#"
                className="block py-2 pl-3 pr-4  rounded ml:bg-transparent stroke  ml:py-1 ml:px-2 hover:text-white"
                aria-current="page"
                id={pathname === "/product" ? "active-nav" : ""}
              >
                Products
                <Image
                  loading="lazy"
                  src={dropdown}
                  alt=""
                  className="inline-flex ml-2"
                />
              </Link>
            </MenuHandler>

            <MenuList className="grid grid-cols-2 gap-2 nav_menu_bg drop-shadow-2xl border-none z-[10000] relative mx-2">
              {navListMenuItems?.map(({ title, icon, route }, index) => (
                <Link href={route} key={index}>
                  <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2 hover:bg-gray-900 focus:bg-opaci active:bg-none active:bg-opacity-0">
                    <Image
                      variant="circular"
                      alt="products"
                      src={icon}
                      className="w-10 sm:w-14"
                      loading="lazy"
                    />
                    <div className="">
                      <h1 className="font-medium text-sm sm:text-base text-gray-400">
                        {title}
                      </h1>
                    </div>
                  </MenuItem>
                </Link>
              ))}
            </MenuList>
          </Menu>
        </li>
        <li>
          <Link
            href="/about"
            className="block py-2 pl-3 pr-4 text-[#ffffff80] rounded hover:text-white stroke ml:py-1 ml:px-2 "
            id={pathname === "/about" ? "active-nav" : ""}
          >
            Company
            {/* <Image src={dropdown} alt="" className="inline-flex ml-2" /> */}
          </Link>
        </li>
        <li>
          <Link
            href="/newsroom"
            className="block py-2 pl-3 pr-4 text-[#ffffff80] rounded hover:text-white stroke ml:py-1 ml:px-2 "
          >
            News
          </Link>
        </li>
        <li>
          <Link
            href="/contact" 
          
            className="block py-2 pl-3 pr-4 text-[#ffffff80] rounded hover:text-white stroke ml:py-1 ml:px-2 "
            id={pathname === "/team" ? "active-nav" : ""}
          >
            Contact
          </Link>
        </li>
      </ul>
    </>
  );

  return (
    <>
      <div className="max-w-screen-xl mx-auto mb-[70px] font-roboto relative z-[10000] bg-black">
        <nav className=" fixed w-full z-20 top-0 left-0  navbar">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
            <Link href="/" className="flex items-center">
              <div className="logo-bg px-4 py-2 md:py-[5px] md:px-6">
                <Image
                  loading="lazy"
                  src={logo}
                  className="h-5 w-5 md:h-8"
                  alt="mocdt logo"
                />
              </div>
              {/* <Image src={logo} className="h-11  mr-1.5" alt="Flowbite Logo" /> */}
            </Link>
            <div className="flex ml:order-2">
              <div className="hidden ml:block">
                {/* <ExpandableSearchBar /> */}
                <button className="gradient_button mx-auto justify-center items-center  ">
                  <Link
                    className="title_gradient_color gradient_button_text"
                    href="https://mocdt.typeform.com/join-waitlist"
                  >
                    {" "}
                    Join the Waitlist
                  </Link>
                </button>
              </div>
              <button
                data-collapse-toggle="navbar-sticky"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg ml:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-sticky"
                aria-expanded="false"
                onClick={openDrawerRight}
              >
                {openNav ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <>
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 17 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 1h15M1 7h15M1 13h15"
                      />
                    </svg>
                  </>
                )}
              </button>
            </div>
            <div
              className={`items-center justify-between ${
                openNav ? "block" : "hidden"
              } w-full ml:flex ml:w-auto ml:order-1`}
              id="navbar-sticky"
            >
              {navlist}
            </div>
          </div>
        </nav>
      </div>
      <MobileDrawer closeDrawerRight={closeDrawerRight} openRight={openRight} />
    </>
  );
};

export default Navbar;
