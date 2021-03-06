import Image from "next/image";
import {useRouter} from 'next/router'
import {
  SearchIcon,
  UserCircleIcon,
  UserIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
export default function Header() {
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuests, setNoOfGuests] = useState(1);
  const router=useRouter()
  // create handleChange function
  const handleChange = (range) => {
    setStartDate(range.selection.startDate);
    setEndDate(range.selection.endDate);
  };

  // resetInput function
  const resetInput = () => setSearch("");
  const selectionRanges = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // create search function
  const searchs=()=>{
    router.push({
      pathname:'/search',
      query:{
        location:search,
        startDate:startDate.toISOString(),
        endDate:endDate.toISOString(),
        noOfGuests
      }
    })
  }

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5  md:px-10">
      {/* left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer  my-auto"
      >
        <Image
          src="https://links.papareact.com/qd3"
          objectFit="contain"
          objectPosition="left"
          layout="fill"
        />
      </div>

      {/* middle */}
      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm ">
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-grow pl-5 bg-transparent focus:outline-none text-sm text-gray-600 placeholder-gray-400"
          type="text"
          placeholder="Start your search"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-500 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 p-2 rounded-full">
          <MenuIcon className="h-6 cursor-pointer" />
          <UserCircleIcon className="h-6 cursor-pointer" />
        </div>
      </div>
      {/* show the content where write thing in search input */}
      {search && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRanges]}
            minDate={new Date()}
            rangeColors={["#f05b61"]}
            onChange={handleChange}
          />

          {/* section 2 */}
          <div className="flex items-center border-b mb-4">
            <h1 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h1>
            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setNoOfGuests(e.target.value)}
              type="number"
              min={1}
              className="w-12 pl-2 text-lg outline-none text-red-400"
            />
          </div>

          {/* section 3 */}
          <div className="flex">
            <button className="flex-grow text-gray-500" onClick={resetInput}>
              Cancel
            </button>
            <button className="flex-grow text-red-400" onClick={searchs}>Search</button>
          </div>
        </div>
      )}
    </header>
  );
}
