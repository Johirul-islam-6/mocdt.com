import React from "react";
import WorkflowBottom from "./WorkflowBottom";
import WorkflowSlider from "./WorkflowSlider";
import Link from "next/link";

const Workflow = () => {
  return (
    <div className="flex flex-col items-center">
      <div>
        <div className="workflow_bg border-[1.8px] border-[#E0E0E0] h-full rounded-[10px] w-full relative overflow-hidden mb-7">
          <div className="">
            <WorkflowSlider />
          </div>
        </div>
        <div className="absolute bottom-[80px] left-0 right-0">
          <WorkflowBottom />
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <Link href="/mission">
        <button className="discover_button">Read Our Mission</button>
        </Link>
      </div>
    </div>
  );
};

export default Workflow;
