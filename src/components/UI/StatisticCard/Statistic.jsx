import React from 'react';

function Statistic() {
  return (
    <div className="flex justify-center items-center w-fit px-2 py-1 rounded-md h-fit bg-[#E6F4FF] border border-[#1677FF]">
      <div className="icon_wrapper text-[#1677FF] mr-2">icon</div>
      <div className="percentage_wrapper text-[#1677FF]">89 %</div>
    </div>
  );
}

export default Statistic;
