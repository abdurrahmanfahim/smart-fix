import Pagination from '@/components/Pagination'
import AppointmentCardGroup from './AppointmentCardGroup'
import BookingLinkCopy from './BookingLinkCopy'
import paginationTableData from './PaginationTableData'


const Appointments = () => {
  return (
    <section  className=' m-2 sm:m-6 '>
      <AppointmentCardGroup/>
      <BookingLinkCopy/>
      <Pagination data={paginationTableData} />
    </section>
  )
}

export default Appointments