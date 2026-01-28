import React from "react";
import { InputInputGroup } from "./Input";
import { SearchIcon } from "lucide-react";
import DropdownButton from "@/components/Dropdown";
import CallList from "./CallList";
import CallDetails from "./CallDetails";
import callLogs from './call-log-data.js'

const CallLogs = () => {


  console.log(callLogs[0])

  const issueArray = [
    "All Issues",
    "Screen",
    "Software",
    "Battery",
    "Unknown",
  ];
  const callType = [
    "All Type",
    "AI Resolved",
    "Warm Transfer",
    "Appointment",
    "Dropped",
  ];
  const dateArray = ["Today", "Last Week", "Last Month", "This Year", "All"];
  return (
    <div className="m-6">
      <div className="flex justify-between gap-6 ">
        
        <div className="flex flex-col gap-6 grow max-w-1/2 ">
          <InputInputGroup
          icon={<SearchIcon />}
          className={"color-card pl-4 h-12.5   "}
          />
          
          <CallList />

        </div>

        <div className="flex flex-col gap-6 grow max-w-1/2 ">
          <div className="flex gap-6 justify-end">
            <DropdownButton items={callType} />
            <DropdownButton items={issueArray} />
            <DropdownButton items={dateArray} />
          </div>

          <CallDetails data={callLogs[0]} />
        </div>
      </div>
    </div>
  );
};

export default CallLogs;
