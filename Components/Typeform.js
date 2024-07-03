"use client";

import React, { useEffect } from "react";

const Typeform = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;

    script.onload = async () => {
      console.log('duk madari')
     await window.typeformEmbed.makeWidget("01HCAG592WMETMT39HVC1Q2YGT", {
        container: document.querySelector("div[data-tf-live]"),
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []); 


  return (
    <div className="h-[90vh] w-[100%] justify-center items-center">
      <div data-tf-live="01HCAG592WMETMT39HVC1Q2YGT"></div>
    </div>
  );
};

export default Typeform;
