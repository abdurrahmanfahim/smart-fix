import DashboardCards from "@/components/Dashboard-cards"
import Graph from "@/components/Graph"
import RecentActivity from "@/components/RecentActivity"
import RepairRequest from "@/components/RepairRequest"

const Dashboard = () => {
  return (
    <div className='m-6 '>
      <div className="flex flex-col gap-6">
        <DashboardCards />
        <Graph />
        <div className="flex gap-6">
          <RecentActivity />
          <RepairRequest />
        </div>
      </div>
    </div>
  )
}

export default Dashboard