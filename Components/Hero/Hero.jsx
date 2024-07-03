import React from "react";
import { Ceo, Discover } from "./Ceo";
import "./Hero.css";
import { Privacy } from "./Privacy";
export const Hero = () => {
  return (
    <>
      <div className="hero ">
        <Privacy />
        <Ceo />
      </div>
    </>
  );
};
