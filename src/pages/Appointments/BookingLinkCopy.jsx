import { useState } from "react";
import CheckIcon from "@/assets/icons/svg/CheckIcon";
import CopyIcon from "@/assets/icons/svg/CopyIcon";

const BookingLinkCopy = () => {
  let [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const link = "https://techstore.com/book?id=store123";
    navigator.clipboard.writeText(link);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="mt-5 md:mt-0 p-2.5 md:p-6.25 w-full rounded-2xl md:rounded-3xl bg-linear-to-b from-[#1A1A2E] to-[#16213E]">
      <h3 className=" font-inter font-normal text-sm md:text-base leading-6 text-white">
        Booking Link
      </h3>

      <div className=" mt-2 md:mt-4 flex items-center justify-center gap-x-1.5 md:gap-x-3">
        <div className=" cursor-pointer grow py-3.25 px-2 md:px-4 rounded-xl md:rounded-[14px] border border-[#0e4236] bg-[#111421] font-arimo font-normal text-[10px] sm:text-sm md:text-base leading-6 text-white">
          https://techstore.com/book?id=store123
        </div>
        <button
          onClick={() => handleCopy()}
          className="inset-shadow-primary cursor-pointer rounded-xl bg-linear-to-b from-[#152252] to-[#111B3C] flex items-center justify-center gap-x-4 p-3 md:py-2.25 md:px-[11.5px] font-inter font-medium text-base leading-[150%] text-white"
        >
          {copied ? (
            <CheckIcon
              className={`${copied ? "scale-100" : " scale-0"}  transition-all duration-500 text-2xl size-6 sm:size-8`}
            />
          ) : (
            <CopyIcon
              className={`${copied ? "scale-0" : "scale-100"} transition-all duration-500 text-2xl size-6 sm:size-8`}
            />
          )}
          <span className=" hidden md:flex">Copy Link</span>
        </button>
      </div>
    </div>
  );
};

export default BookingLinkCopy;
