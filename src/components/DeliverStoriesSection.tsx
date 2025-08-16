import Image from 'next/image';
import React from 'react';

const features = [
  'Share-ready link with your credits on every view',
  'Emotional impact that drives referrals',
  'Curated hero shots with narrative flow',
];

const DeliverStoriesSection: React.FC = () => {
  return (
    <div className="w-full flex items-center justify-center gap-x-12 py-20 px-16 bg-white rounded-xl">
      <div className="flex-1">
        <Image src="https://res.cloudinary.com/dqipjpy1w/image/upload/v1755321151/Frame_14_1_hfunxq.png" alt="Deliver Stories" width={527} height={400} className="w-full h-full object-cover" />
      </div>
      <div className="flex flex-col items-start gap-y-6 flex-1">
        <div className='flex flex-col gap-y-4 w-full'>
          <h2 className="font-medium text-[40px] leading-[120%] text-black">Deliver stories, not just files</h2>
          <p className="font-normal text-lg text-[#667085]">
            With Memoify, your work becomes an interactive Digital Graduation Album, complete with your hero shots, a personalized storyline, and space for heartfelt messages from friends and family
          </p>
        </div>
        <div className="flex flex-col items-start gap-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-x-3">
              <div className="flex items-center justify-center w-6 h-6">
                <Image src="/SealCheck.svg" alt="Seal Check" width={24} height={24} />
              </div>
              <span className="font-normal text-[20px] leading-[140%] text-black">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliverStoriesSection;
