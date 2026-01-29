import Table from '../Table'
const Pagination = ({data}) => {
  return (
    <section className='mt-8'>
        <Table data={data} />
    </section>
  )
}

export default Pagination