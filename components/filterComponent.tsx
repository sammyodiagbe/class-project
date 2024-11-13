"use client";
import { ChangeEventHandler, FC, useState } from "react";
import { JobType } from "@/utils/types";
import { BiChevronDown, BiSearch } from "react-icons/bi";
import { BsSuitcase } from "react-icons/bs";
import { PiNavigationArrow } from "react-icons/pi";
import { jobListings } from "@/utils/data";

interface FilterComponentTypes {
  updateListings: (filteredListings: JobType[]) => void;
  listings: JobType[];
}

const FilterComponent: FC<FilterComponentTypes> = ({
  updateListings,
  listings,
}) => {
  const [searchInput, setSearchInput] = useState("");
  const [locationSearch, setLocationSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJobType, setSelectedJobType] = useState("");
  const jobTypes = ["Full-time", "Part-time", "Contract"];

  const searchListings: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const { target } = event;
    const tempArr = [...listings];
    if (target.value === "") {
      setSearchInput("");
      updateListings(jobListings);
      return;
    }
    setSearchInput(target.value);
    const filteredListing = tempArr.filter((listing) =>
      listing.title
        .toLocaleLowerCase()
        .includes(target.value.toLocaleLowerCase())
    );
    updateListings(filteredListing);
  };

  const searchLocation: ChangeEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const { target } = event;
    const tempArr = [...listings];
    if (target.value === "") {
      setLocationSearch("");
      updateListings(jobListings);
      return;
    }
    setLocationSearch(target.value);
    const filteredListing = tempArr.filter((listing) =>
      listing.city
        .toLocaleLowerCase()
        .includes(target.value.toLocaleLowerCase())
    );
    updateListings(filteredListing);
  };
  return (
    <div className=" bg-green-600">
      <div className="container mx-auto py-4 flex gap-1">
        <div className="flex gap-1 items-center p-2 bg-green-700 rounded-md  flex-1">
          <BiSearch size={18} color="white" />
          <input
            type="text"
            className="p-2 outline-none bg-transparent text-white placeholder-white flex-1"
            placeholder="Search tech jobs "
            onChange={searchListings}
            value={searchInput}
          />
        </div>
        <div className="flex gap-1 items-center rounded-md p-2 bg-green-700 flex-1 ">
          <PiNavigationArrow size={18} color="white" />
          <input
            type="text"
            className="p-2 outline-none bg-transparent text-white placeholder-white  flex-1"
            placeholder="Search by Location"
            value={locationSearch}
            onChange={searchLocation}
          />
        </div>
        <div className="relative">
          <div
            className="flex gap-1 bg-green-700 rounded-md p-2 items-center cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
          >
            <BsSuitcase size={18} color="white" />
            <div className="p-2 outline-none bg-transparent text-white placeholder-white flex-1">
              {selectedJobType || "Job type"}
            </div>
            <BiChevronDown size={18} color="white" />
          </div>

          {isOpen && (
            <div className="absolute top-full left-0 w-full mt-1 bg-white rounded-md shadow-lg z-10">
              {jobTypes.map((type) => (
                <div
                  key={type}
                  className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700"
                  onClick={() => {
                    setSelectedJobType(type);
                    setIsOpen(false);
                    const tempArr = [...jobListings];
                    const filteredListing = tempArr.filter(
                      (job) => job.employmentType === type
                    );
                    updateListings(filteredListing);
                  }}
                >
                  {type}
                </div>
              ))}
              <div
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-gray-700 border-t"
                onClick={() => {
                  setSelectedJobType("");
                  setIsOpen(false);
                  updateListings(jobListings);
                }}
              >
                Show All
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
