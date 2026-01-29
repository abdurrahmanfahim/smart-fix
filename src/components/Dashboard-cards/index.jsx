import React from "react";
import MyCard from "../MyCard";
import cardsData from "./dashboard-cards-data";
const DashboardCards = () => {

  return (
    <section className="flex items-center justify-between gap-3 sm:gap-6 flex-wrap">
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
    </section>
  );
};

export default DashboardCards;
