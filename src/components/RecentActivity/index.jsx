import activitiesData from "./activity-data";

const RecentActivity = ({className}) => {
  return (
    <div className={`p-6 rounded-2xl color-card ${className}`}>
      <h3 className="font-inter font-normal text-xl leading-7 text-white mb-4 cursor-pointer">
        Recent Activity
      </h3>

      <div className="flex flex-col gap-y-3">
        {activitiesData.map((activity, index) => (
          <div
            key={activity.text + index}
            className="rounded-[10px] p-3 flex gap-x-3 cursor-pointer bg-[#1D293D50] "
          >
            <div
              className={`size-2 rounded-full mt-2 shrink-0 ${activity.dotColor}`}
            ></div>

            <div>
              <p className="font-inter font-normal text-[14px] leading-5 text-white mb-1">
                {activity.text}
              </p>
              <p className="font-inter font-normal text-xs leading-4 text-gray">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentActivity;