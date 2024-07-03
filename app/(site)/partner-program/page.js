"use client";
import { Input } from "@material-tailwind/react";
import React, { useState } from "react";
import "./partner.css";
import Swal from "sweetalert2";
// import swal from "sweetalert";

const page = () => {
  const submitBtn = () => {
    Swal({
      text: "Message Sent Successfully! We will be in contact soon!",
      icon: "success",
      button: "Ok",
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto section_padding">
      <div className="flex justify-between">
        <div className="gradient-rounded-div-left left-[0px] "></div>
        <div className="gradient-rounded-div-right right-[0px] "></div>
      </div>
      <h1 className="page_title_38">MOCDT Partner Program</h1>
      <div className="partner-bg  p-5 mt-10">
        <h2 className="text-white text-[16px] md:text-[24px] font-[600] text-center">
          Apply for Partner Program
        </h2>
        <div className="mt-20">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
            <Input
              variant="static"
              label="Company Name"
              className="paragraph_14 "
              color="white"
            />
            <Input
              variant="static"
              label="Company Size"
              className="paragraph_14 "
              color="white"
            />
          </div>
          <div className="my-20">
            <Input
              variant="static"
              label="Partnership / Type Agenda"
              placeholder=""
              className="paragraph_14 "
              color="white"
            />
          </div>
          <h2 className="text-white text-[16px] md:text-[24px] font-[600] text-center">
            Representative from Company
          </h2>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 my-20">
            <Input
              variant="static"
              label="Representative Name"
              className="paragraph_14 "
              color="white"
            />
            <Input
              variant="static"
              label="Email Address"
              color="white"
              className="paragraph_14"
            />
          </div>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 my-20">
            <Input
              variant="static"
              label="Designation"
              className="paragraph_14 "
              color="white"
            />
            <Input
              variant="static"
              label="Contact Number"
              color="white"
              className="paragraph_14"
            />
          </div>
        </div>
        <div className="flex  lg:justify-end my-10">
          <button
            onClick={submitBtn}
            className="submit_button mx-auto lg:mx-0 "
          >
            <span className="">
              <span className="text-white paragraph_16">Submit</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
