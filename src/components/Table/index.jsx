import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useState } from "react";
import PaginationController from "./PaginationController";
const headerStyle =
  "text-white py-4.5 font-inter text-sm leading-5 text-center";
const childrenStyle = "py-4.5 font-arimo text-sm leading-5  ";

const AppointmentTable = ({ data }) => {
  const dataArray = [
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
    ...data,
  ];
  const [page, setPage] = useState(1);
  const pagesCount = Math.ceil(dataArray.length / 6);

  const start = (page - 1) * 6;
  const end = start + 6;
  const paginatedData = dataArray.slice(start, end);

  return (
    <>
      <Table className={"text-white text-center rounded-3xl"}>
        <TableHeader>
          <TableRow className={"border-[#162F61] bg-[#111b3b] hover:bg-primary "}>
            <TableHead className={headerStyle}>Client Name</TableHead>
            <TableHead className={headerStyle}>Client Phone</TableHead>
            <TableHead className={headerStyle}>Client mail</TableHead>
            <TableHead className={headerStyle}>Client Device</TableHead>
            <TableHead className={headerStyle}>Repair Type</TableHead>
            <TableHead className={headerStyle}>Date</TableHead>
            <TableHead className={headerStyle}>Slot no</TableHead>
            <TableHead className={headerStyle}>Start Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item, index) => (
            <TableRow
              className={"border-[#162F61] py-4.5 bg-[#111b3b] hover:bg-[#111b3b30] "}
              key={index}
            >
              <TableCell className={`${childrenStyle} text-[#51A2FF]`}>
                {item.clientName}
              </TableCell>
              <TableCell className={`${childrenStyle} text-[#CFCFCF]`}>
                {item.clientPhone}
              </TableCell>
              <TableCell className={`${childrenStyle} text-white`}>
                {item.clientMail}
              </TableCell>
              <TableCell className={`${childrenStyle} text-[#CFCFCF]`}>
                {item.device}
              </TableCell>
              <TableCell className={`${childrenStyle} text-[#CFCFCF]`}>
                {item.repairType}
              </TableCell>
              <TableCell className={`${childrenStyle} text-[#CFCFCF]`}>
                {item.date}
              </TableCell>
              <TableCell className={`${childrenStyle} text-[#CFCFCF]`}>
                {item.slotNo}
              </TableCell>
              <TableCell className={`${childrenStyle} text-[#CFCFCF]`}>
                {item.startTime}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className=" mt-11.25 mb-5">
        <PaginationController
          currentPage={page}
          totalPages={pagesCount}
          pageChanger={setPage}
        />
      </div>
    </>
  );
};

export default AppointmentTable;
