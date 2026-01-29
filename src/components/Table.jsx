import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import PaginationController from "./Pagination/PaginationController";
import { useState } from "react";
const styleHeader =
  "text-white py-4.5 font-inter text-sm leading-5 text-center";
const styleChildren = "py-4.5 font-arimo text-sm leading-5";

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
  const [totalPage, setTotalPage] = useState(pagesCount);

  const start = (page - 1) * 6;
  const end = start + 6;
  const paginatedData = dataArray.slice(start, end);

  return (
    <>
      <Table className={"text-white text-center rounded-3xl overflow-x-scroll xl:overflow-hidden"}>
        <TableHeader>
          <TableRow className={"border-[#162F61] bg-[#111b3b]"}>
            <TableHead className={styleHeader}>Client Name</TableHead>
            <TableHead className={styleHeader}>Client Phone</TableHead>
            <TableHead className={styleHeader}>Client mail</TableHead>
            <TableHead className={styleHeader}>Client Device</TableHead>
            <TableHead className={styleHeader}>Repair Type</TableHead>
            <TableHead className={styleHeader}>Date</TableHead>
            <TableHead className={styleHeader}>Slot no</TableHead>
            <TableHead className={styleHeader}>Start Time</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((item, index) => (
            <TableRow
              className={"border-[#162F61] py-4.5 bg-[#111b3b]"}
              key={index}
            >
              <TableCell className={`${styleChildren} text-[#51A2FF]`}>
                {item.clientName}
              </TableCell>
              <TableCell className={`${styleChildren} text-[#CFCFCF]`}>
                {item.clientPhone}
              </TableCell>
              <TableCell className={`${styleChildren} text-white`}>
                {item.clientMail}
              </TableCell>
              <TableCell className={`${styleChildren} text-[#CFCFCF]`}>
                {item.device}
              </TableCell>
              <TableCell className={`${styleChildren} text-[#CFCFCF]`}>
                {item.repairType}
              </TableCell>
              <TableCell className={`${styleChildren} text-[#CFCFCF]`}>
                {item.date}
              </TableCell>
              <TableCell className={`${styleChildren} text-[#CFCFCF]`}>
                {item.slotNo}
              </TableCell>
              <TableCell className={`${styleChildren} text-[#CFCFCF]`}>
                {item.startTime}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className=" mt-11.25 mb-5">
        <PaginationController
          currentPage={page}
          totalPages={totalPage}
          pageChanger={setPage}
        />
      </div>
    </>
  );
};

export default AppointmentTable;
