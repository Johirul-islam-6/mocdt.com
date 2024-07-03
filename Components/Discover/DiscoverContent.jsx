/* eslint-disable react/no-unescaped-entities */

import Link from "next/link";

const DiscoverContent = () => {
  return (
    <div className="flex flex-col">
      <div className="mb-12">
        <h3 className="paragraph_24 text-[#FAFAFA] pb-2">
          Embracing a Customer-Centric Mindset
        </h3>
        <div className="discover_border_bg w-[70%] md:w-[50%] xl:w-[70%] mb-3"></div>
        <p className="paragraph_16 text-[#9b9b9b]">
          Customer satisfaction is our top priority. Their triumph and joy with
          our software solutions fuel our every move.
        </p>
      </div>
      <div>
        <h3 className="paragraph_24 text-[#FAFAFA] pb-2">
          Focus on Research & Development
        </h3>
        <div className="discover_border_bg w-[70%] md:w-[50%] xl:w-[70%] mb-3"></div>
        <p className="paragraph_16 text-[#9b9b9b]">
          We're passionate about software and fuel it through persistent R&D
          efforts. Our culture thrives on ceaseless innovation, seeking
          excellence in all we undertake. Determined to break barriers, we
          deliver outstanding products and services..
        </p>
      </div>

      <div className="flex justify-center mt-10">
        <Link href="/story">
          <button className="discover_button">Read Our Story</button>
        </Link>
      </div>
    </div>
  );
};

export default DiscoverContent;
