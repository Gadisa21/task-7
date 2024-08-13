import JobDetailLeft from "../JobDetailLeft/page";
import JobDetailRight from "../JobDetailRight/page";

const JobDetail = ({ params }: { params: { index: number } }) => {
  return (
    <div className="flex gap-[6px] p-8">
      <JobDetailLeft index={params.index}  />
      <JobDetailRight index={params.index} />
    </div>
  );
};

export default JobDetail;
