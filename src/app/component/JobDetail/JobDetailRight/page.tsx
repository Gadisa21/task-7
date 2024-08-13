import React from "react";
import Image from "next/image";
import data from "../../../../../public/data.json";
interface SpecificJob {
  posted_on: String;
  deadline: String;
  location: String;
  start_date: String;
  end_date: String;
  categories: String[];
  required_skills: String[];
}



const JobDetailRight = ({ index }: { index: number }) => {
  const specificData = data.job_postings[index];
  const about: SpecificJob = {
    posted_on: specificData.about.posted_on,
    deadline: specificData.about.deadline,
    location: specificData.about.location,
    start_date: specificData.about.start_date,
    end_date: specificData.about.end_date,
    categories: specificData.about.categories,
    required_skills: specificData.about.required_skills,
  };

  return (
    <div className="w-[293.5px] mx-auto">
      <p className="title ">About</p>
      <div className="flex gap-4 mb-6 mt-9">
        <Image
          className="border-[#D6DDEB] w-[44px] h-[44px]"
          src="/images/posted.png"
          width={44}
          height={44}
          alt="icon"
        />
        <div>
          <p className=" text-[#515B6F] font-epilogue font-normal text-base">
           Posted On
          </p>
          <p className="font-epilogue font-semibold text-base color-[#25324B]">
            {about.posted_on}
          </p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <Image
          className="border-[#D6DDEB] w-[44px] h-[44px]"
          src="/images/deadline.png"
          width={44}
          height={44}
          alt="icon"
        />
        <div>
          <p className=" text-[#515B6F] font-epilogue font-normal text-base">
          Deadline
           
          </p>
          <p className="font-epilogue font-semibold text-base color-[#25324B]">
            {about.deadline}
          </p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <Image
          className="border-[#D6DDEB] w-[44px] h-[44px]"
          src="/images/location.png"
          width={44}
          height={44}
          alt="icon"
        />
        <div>
          <p className=" text-[#515B6F] font-epilogue font-normal text-base">
          Location
           
          </p>
          <p className="font-epilogue font-semibold text-base color-[#25324B]">
            {about.location}
          </p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <Image
          className="border-[#D6DDEB] w-[44px] h-[44px]"
          src="/images/startdate.png"
          width={44}
          height={44}
          alt="icon"
        />
        <div>
          <p className=" text-[#515B6F] font-epilogue font-normal text-base">
          Start Date
           
          </p>
          <p className="font-epilogue font-semibold text-base color-[#25324B]">
            {about.start_date}
          </p>
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <Image
          className="border-[#D6DDEB] w-[44px] h-[44px]"
          src="/images/enddate.png"
          width={44}
          height={44}
          alt="icon"
        />
        <div>
          <p className=" text-[#515B6F] font-epilogue font-normal text-base">
          End Date
           
          </p>
          <p className="font-epilogue font-semibold text-base color-[#25324B]">
            {about.end_date}
          </p>
        </div>
      </div>

      <div className="border-t border-b border-[#D6DDEB]">
        <p className="title mt-4">Categories</p>
        <div className="flex flex-wrap gap-2 mb-4">
          <p className="btnd bg-[#EB85331A] text-[#FFB836] ">{about.categories[0]}</p>
          <p className=" btnd text-[#56CDAD] bg-[#56CDAD1A] ">{about.categories[1]}</p>
        </div>
      </div>


      <div className="mt-4">
        <p className="title">Required Skills</p>
        <div className="flex flex-wrap gap-2">
       {
        about.required_skills.map((skill,index)=>(

        <p className="required_skill mb-0" key={index}>{skill}</p>
        
        ))
        
       }</div>
        
          {/* <p className="required_skill">English</p>
          <p className="required_skill">Copywriting</p> */}
       
      </div>
    </div>
  );
};

export default JobDetailRight;
