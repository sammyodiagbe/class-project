/* eslint-disable */
// @ts-ignore:
import { jobListings } from "@/utils/data";
import { JobType } from "@/utils/types";
import { FC } from "react";
import Link from "next/link";

type Props = {
  params: {
    id: number;
  };
};

const JobPage: FC<Props> = ({ params }) => {
  // In a real application, you would fetch the job data here
  // using the id from params
  const { id } = params;
  const mockJob: JobType = jobListings[id];

  return (
    <div className="container mx-auto py-8">
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-6">
          <span className="bg-gray-900 text-white p-2 px-4 rounded-full text-sm">
            {mockJob.company}
          </span>
        </div>

        <h1 className="text-3xl font-bold mb-4">{mockJob.title}</h1>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <span className="text-gray-600">Location:</span>
            <p className="font-semibold">{mockJob.city}</p>
          </div>
          <div>
            <span className="text-gray-600">Salary Range:</span>
            <p className="font-semibold">{mockJob.rate}</p>
          </div>
          <div>
            <span className="text-gray-600">Level:</span>
            <p className="font-semibold">{mockJob.level}</p>
          </div>
          <div>
            <span className="text-gray-600">Type:</span>
            <p className="font-semibold">{mockJob.employmentType}</p>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-2">Job Description</h2>
          <p className="text-gray-700">{mockJob.description}</p>
        </div>

        <Link href={`/jobs/${params.id}/apply`} className="block">
          <button className="w-full bg-green-500 text-white py-3 rounded-md font-bold hover:bg-green-600 transition-colors">
            Apply for this position
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobPage;
