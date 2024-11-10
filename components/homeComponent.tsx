"use client";
import { useState } from "react";
import FilterComponent from "./filterComponent";
import JobsComponent from "./jobsComponent";
import { jobListings } from "@/utils/data";
import { JobType } from "@/utils/types";

const HomeComponent = () => {
  const [listings, setListings] = useState<JobType[]>(jobListings);

  const updateListing = (filteredListing: JobType[]) => {
    setListings(filteredListing);
  };
  return (
    <>
      <FilterComponent listings={listings} updateListings={updateListing} />
      <JobsComponent listings={listings} />
    </>
  );
};

export default HomeComponent;
