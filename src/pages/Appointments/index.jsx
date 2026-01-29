import Table from "@/components/Table";
import AppointmentCardGroup from "./AppointmentCardGroup";
import BookingLinkCopy from "./BookingLinkCopy";
import paginationTableData from "./PaginationTableData";

const Appointments = () => {
  return (
    <section className=" m-2 sm:m-6 ">
      <div className="max-md:max-w-[90%] ">
        <AppointmentCardGroup />
      </div>
      <div className="max-md:max-w-[90%] ">
        <BookingLinkCopy />
      </div>
      <div className="">
        <Table data={paginationTableData} />
      </div>
    </section>
  );
};

export default Appointments;
