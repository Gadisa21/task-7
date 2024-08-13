import React from "react";
import Image from "next/image";
import data from "../../../../../public/data.json";
interface SpecificJob {
  title: String;
  description: String;
  responsibilities: String[];
  ideal_candidate: { age: String; gender: String };
  traits: String[];
  when_where: String;
}

const JobDetailLeft = ({ index }: { index: number }) => {
  const jobInfo = data.job_postings[index];

  const JobData: SpecificJob = {
    title: jobInfo.title,
    description: jobInfo.description,
    ideal_candidate: {
      age: jobInfo.ideal_candidate.age,
      gender: jobInfo.ideal_candidate.gender,
    },
    traits: jobInfo.ideal_candidate.traits,
    when_where: jobInfo.when_where,
    responsibilities: jobInfo.responsibilities,
  };

  return (
    <div className="w-[815px] mx-auto pt-7">
      <div className="mb-10">
        <p className=" title">Description</p>
        <p className="pstyles">{JobData.description}</p>
      </div>
      <div className="mb-10">
        <p className="title ">Responsibility</p>
        {JobData.responsibilities.map((res, index) => (
          <div className="flex gap-3 mb-2" key={index}>
            <Image
              className=" w-[20px] h-[20px]"
              src="/images/tik.png"
              width={20}
              height={20}
              alt="mark"
            />

            <p className="pstyles ">{res}</p>
          </div>
        ))}
      </div>
      <div className="mb-10">
        <p className="title">Ideal Candidate we want </p>
        <ul className="list-disc pl-5">
          <li className="sub_title mb-2">
            {JobData.ideal_candidate.age} age {JobData.ideal_candidate.gender}{" "}
            {JobData.title}
          </li>

          {JobData.traits.map((trait, index) => {
            const [beforeSemicolon, afterSemicolon] = trait.split(":");

            return (
              <li className="mb-2">
                <span className="sub_title">
                  {beforeSemicolon} {afterSemicolon && ":"}{" "}
                </span>{" "}
                <span className="pstyles">{afterSemicolon}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <div>
        <p className="title">When & Where</p>
        <div className="flex gap-2 items-center">
          <Image
            src="/images/location.png"
            width={44}
            height={44}
            alt="location icon"
          />
          <p className="pstyles">{JobData.when_where} </p>
        </div>
      </div>
    </div>
  );
};

export default JobDetailLeft;
