import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import React from "react";
import PlayIcon from "@/assets/icons/svg/PlayIcon";
import PaperIcon from "@/assets/icons/svg/PaperIcon";

const CallDetails = ({ data }) => {
  console.log(data);
  return (
    <div className="rounded-3xl color-card  ">
      <h3 className="font-inter font-normal text-[20px] leading-7 text-white mb-4 cursor-pointer p-4 border-b border-[#2B7FFF20] ">
        Call Details
      </h3>

      <div className="flex flex-col gap-6 p-6 ">
        <div className="flex flex-wrap gap-4 font-inter font-normal justify-between ">
          <div className="w-[48%]">
            <span className="text-gray text-sm leading-5 ">Phone Number</span>
            <p className="text-white text-base leading-6 ">
              {data.phoneNumber}
            </p>
          </div>

          <div className="w-[48%]">
            <span className="text-gray text-sm leading-5 ">Duration</span>
            <p className="text-white text-base leading-6 ">{data.duration}</p>
          </div>

          <div className="w-[48%]">
            <span className="text-gray text-sm leading-5 ">Date & Time</span>
            <p className="text-white text-base leading-6 ">{data.dateTime}</p>
          </div>

          <div className="w-[48%]">
            <span className="text-gray text-sm leading-5 ">Issue Type</span>
            <p className="text-white text-base leading-6 ">{data.issueType}</p>
          </div>
        </div>

        <div className="">
          <p className="text-gray text-sm leading-5 mb-1 ">Call Type</p>
          <Badge
            className={` rounded-[10px] py-1 px-2 font-inter leading-5 text-xs 
                ${data.callType === "AI Resolved" && "text-success bg-[#00C95020] border border-[#00C95030] "}
                ${data.callType === "Warm Transfer" && "text-warn bg-[#FF690020] border border-[#FF690030] "}
                ${data.callType === "Appointment" && "text-info bg-[#2B7FFF20] border border-[#2B7FFF30] "}
                ${data.callType === "Dropped" && "text-error bg-[#FF150020] border border-[#FF690030] "} `}
          >
            {data.callType}
          </Badge>
        </div>

        <div className="">
          <span className="text-gray text-sm leading-5 ">Outcome</span>
          <p className="text-white text-base leading-6 ">{data.outcome}</p>
        </div>

        <div className="">
          <Button
            className={
              "audio-gradient flex justify-center w-full rounded-[14px] border border-[#AD46FF30] "
            }
          >
            <PlayIcon />
            <p className="text-[#C27AFF]  ">Play Audio Recording</p>
          </Button>
        </div>

        <div className="">
          <div className="flex gap-2 items-center mb-3 ">
            <PaperIcon />
            <p className="text-white text-base leading-6 ">Conversation Transcript</p>
          </div>

          <div className="bg-primary rounded-[14px] flex flex-col gap-3 p-4  ">
            {
              data.transcript.map((item) => (
                <div>
                  <p className={`text-base leading-6 ${item.role !== 'Customer' ? 'text-success' : 'text-info' } `}>{ item.role }</p>
                  <p className="font-inter text-xs leading-5 text-white font-medium ">{ item.message }</p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallDetails;
