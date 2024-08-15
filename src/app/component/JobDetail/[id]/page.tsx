import JobDetailLeft from "../JobDetailLeft/page";
import JobDetailRight from "../JobDetailRight/page";

const JobDetail = ({ params }: { params: { id: string} }) => {
  return (
    <div className="flex gap-[6px] p-8">
      <JobDetailLeft id={params.id}  />
      <JobDetailRight id={params.id} />
    </div>
  );
};

export default JobDetail;
