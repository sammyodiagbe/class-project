"use client";
import { JobType } from "@/utils/types";
import { FC } from "react";
import { BiBookmark } from "react-icons/bi";
import Link from "next/link";

type JobsComponentType = {
  listings: JobType[];
};

const JobsComponent: FC<JobsComponentType> = ({ listings }) => {
  return (
    <div className="container mx-auto space-y-4 py-5">
      <h1>Jobs for you</h1>

      <div className="grid grid-cols-3 gap-5">
        {listings.map((listing, index) => {
          return <Job key={index} data={{ ...listing, id: index }} />;
        })}
      </div>
    </div>
  );
};

const Job: FC<{ data: JobType }> = ({ data }) => {
  const { title, description, company, level, rate, city, employmentType, id } =
    data;
  return (
    <div className="space-y-3 bg-gray-50 p-4 rounded-md">
      <div className="flex items-center justify-between">
        <span className="bg-gray-900 text-white p-1 px-2 rounded-full text-xs">
          {company}
        </span>
        <BiBookmark size={16} />
      </div>
      <div className="space-y-3">
        <h1 className="font-bold text-lg">{title}</h1>
        <p>{description}</p>
        <div className="">
          <span className="text-sm font-bold block">{city}</span>
          <span className="text-sm font-bold block">{rate}</span>
        </div>
        <div className="flex items-center justify-between mt-5">
          <span className="text-sm block">{level}</span>
          <span className="text-sm block">{employmentType}</span>
        </div>

        <div>
          <Link href={`/jobs/${id}`}>
            <button className="p-2 font-bold text-xs rounded-md bg-green-500 hover:bg-green-600 transition-colors text-white">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobsComponent;
