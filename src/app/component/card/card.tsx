import Image from "next/image";
import data from "../../../../public/data.json"
import Link from "next/link";

interface JobPosting {
  title:string;
  company:string
  description:string
  location:string
  image:string
  
}

const Card =  () => {

  const jobData: JobPosting[] = data.job_postings.map((job) => ({
    title: job.title,
    company: job.company,
    description: job.description,
    location: job.about.location,
    image:job.image
  }));

  


  return (
    
    <>
    
    {

    jobData.map((job,index)=>(
<Link href={`component/JobDetail/${index}`}  className="w-[919px] h-[266px] rounded-[30px] border  p-6 grid grid-cols-12 gap-4 mx-auto mb-8 border-[#D6DDEB]" >
        <div className="col-span-1 ">
          <Image src={job.image} alt="image" width={66} height={59}  />
        </div>
        <div className="col-span-11 ">
          
            <p className="text-[20px] leading-6  font-epilogue font-semibold text-manga " >{job.title} </p>
            <p className="font-epilogue text-base font-normal text-[#7C8493] mt-3 ">{job.company} . {job.location}</p>
          
            <p className=" pstyles  mt-3 text-manga">{job.description}</p>
          
          <div className="w-[242px] h-[31px] flex grid-cols-3 gap-2 mt-3  ">
            <div className="border-r-2 ">
            <div className=  "custom bg-purposeBg text-pupose btn mr-2" >In Person</div></div>
            <div className="custom  text-education border border-education  btn" >Education</div>
            <div className="custom text-IT border border-IT  btn rounded-[2px] w-14  " >IT</div>
          </div>
        </div>
      </Link>
    ))
    
      }
    </>
  );
};


//fetch data server side



export default Card;
