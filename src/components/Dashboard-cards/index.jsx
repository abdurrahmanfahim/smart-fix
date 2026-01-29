import React from "react";
import MyCard from "../MyCard";
import cardsData from "./dashboard-cards-data";
const DashboardCards = () => {

  return (
    <div className="mt-6 flex items-center justify-between gap-3 sm:gap-6 flex-wrap">
      {cardsData.map((card, index) => (
        <div className=" w-[31.2%] grow"  key={card.title + index}>
          <MyCard
            title={card.title}
            count={card.count}
            percent={card.percent}
            posIcon={card.posIcon}
          />
        </div>
      ))}
    </div>
  );
};

export default DashboardCards;
