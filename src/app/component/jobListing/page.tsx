import React from "react";
import Card from "../card/card";

const JobListing = () => {
  return (
    <div className="w-[919px] mx-auto mt-5">
      <div className="w-[236px] h-[38px] gap-0">
        <p className="font-Poppins text-4xl font-extrabold leading-[38.4px] text-left text-[#25324B]">
          opportunities
        </p>
        <p className="text-[#7C8493] font-epilogue text-base font-normal leading-[25.6px] text-left">
          showing 73 results
        </p>
      </div>
      <div className="   text-right mb-10">
        <span className="text-[#7C8493] font-epilogue text-base font-normal leading-[25.6px] text-right">
          sort by:
        </span>
        <select className="text-[#25324B] font-epilogue text-base font-medium leading-[25.6px]">
          <option>Most relevant</option>
          <option>newest</option>
          <option>oldest</option>
        </select>
      </div>
      <Card />
    </div>
  );
};

export default JobListing;
