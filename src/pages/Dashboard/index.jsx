import DashboardCards from "@/components/Dashboard-cards"
import Graph from "@/components/Graph"
import RecentActivity from "@/components/RecentActivity"
import RepairRequest from "@/components/RepairRequest"

const Dashboard = () => {
  return (
    <div className='sm:m-6 m-2 '>
      <div className="flex flex-col gap-6">
        <DashboardCards />
        <Graph />
        <div className="flex flex-wrap gap-6">
          <RecentActivity className={'grow sm:max-w-1/2 '} />
          <RepairRequest className={'grow sm:max-w-1/2 '}  />
        </div>
      </div>
    </div>
  )
}

export default Dashboard