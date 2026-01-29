import Table from "@/components/Table";
import AppointmentCardGroup from "./AppointmentCardGroup";
import BookingLinkCopy from "./BookingLinkCopy";
import paginationTableData from "./PaginationTableData";

const Appointments = () => {
  return (
    <section className=" m-2 sm:m-6 ">
      <AppointmentCardGroup />
      <BookingLinkCopy />
      <div className="max-w-screen overflow-x-scroll">
        <Table data={paginationTableData} />
      </div>
    </section>
  );
};

export default Appointments;
