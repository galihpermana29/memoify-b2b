import Image from 'next/image';
import React from 'react';

const features = [
  {
    title: 'Increase Your Revenue',
    description: 'Offer it as a premium package add-on or a high-margin upsell.',
    icon: '/MoneyWavy.svg',
  },
  {
    title: 'Free Marketing',
    description: 'Every shared album is a referral engine with your name and credits.',
    icon: '/Megaphone.svg',
  },
  {
    title: 'Stand Out from the Competition',
    description: 'Few photographers offer this kind of immersive experience.',
    icon: '/Medal.svg',
  },
  {
    title: 'Boost Your Online Presence',
    description: 'Get discovered by new clients through our high-traffic platform.',
    icon: '/ChartLine.svg',
  },
];

const GrowthToolSection: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center gap-x-12 py-20 px-16 bg-white rounded-xl">
      <div className="flex flex-col items-start gap-y-6 flex-1">
        <div className="w-full h-full border border-solid border-[#EEEEEE] rounded-xl p-1">
          <Image src="https://res.cloudinary.com/dqipjpy1w/image/upload/v1755319880/Frame_29_aqvl28.png" alt="Album Growth Tool" width={589} height={221} className="rounded-lg w-full h-full" />
        </div>
        <div className="flex flex-col items-start gap-y-4">
          <h2 className="font-medium text-[40px] leading-[120%] text-black">More than an album — a growth tool for your business</h2>
          <p className="font-normal text-lg text-[#667085]">Turning Your Stunning Shots Into Stories That Grow Your Business</p>
        </div>
      </div>
      <div className="flex flex-col items-start gap-y-4 flex-1">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center p-1 gap-x-[19px] bg-white rounded-xl border border-solid border-[#EEEEEE] w-full">
            <div className="flex items-center justify-center w-20 h-20 bg-[#FFF2EF] rounded-xl">
              <Image src={feature.icon} alt={feature.title} width={40} height={40} />
            </div>
            <div className="flex flex-col items-start gap-y-[7px]">
              <h3 className="font-medium text-xl text-black">{feature.title}</h3>
              <p className="font-normal text-base text-[#667085]">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GrowthToolSection;
