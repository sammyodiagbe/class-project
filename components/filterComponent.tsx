"use client";
import { ChangeEventHandler, FC, useState } from "react";
import { JobType } from "@/utils/types";
import { BiChevronDown, BiMoney, BiSearch } from "react-icons/bi";
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
        <div className="flex gap-1 bg-green-700 rounded-md p-2 items-center ">
          <BsSuitcase size={18} color="white" />
          <input
            type="text"
            className="p-2 outline-none bg-transparent placeholder-white  flex-1"
            placeholder="Job type"
            disabled
          />
          <BiChevronDown size={18} color="white" />
        </div>
        <div className="flex gap-1 items-center ">
          <div></div>
          <BiMoney size={18} color="white" />
          <input
            type="range"
            className="p-2 outline-none bg-transparent flex-1"
            placeholder="Job type"
            min={1200}
            max={1000000}
          />
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;
