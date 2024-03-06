import React from 'react';
import Statistic from './Statistic';

function StatisticCard({ children }) {
  return (
    <div className="card_wrapper shadow-xl border border-[#919191]   rounded-md p-3">
      <h3 className="text-[#919191] text-base mb-2">Title</h3>
      <div className="statistic_wrapper flex  items-center mb-5">
        <h1 className="font-semibold text-2xl mr-2">5668</h1>
        <Statistic />
      </div>
      <div className="description text-[#919191]">You made an extra {35000} this month</div>
    </div>
  );
}

export default StatisticCard;
