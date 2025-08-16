import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

const steps = [
  {
    step: 'Step 1',
    icon: '/Share.svg',
    title: 'Create & Share',
    description: 'Choose your best shots, personalize the album, and send it to your client.',
  },
  {
    step: 'Step 2',
    icon: '/ListChecks.svg',
    title: 'Client Approves',
    description: 'Your client reviews the album, loves it, and sends payment.',
  },
  {
    step: 'Step 3',
    icon: '/Cardholder.svg',
    title: 'You Pay Partner Rate',
    description: 'Pay the discounted partner fee only after you get paid.',
  },
  {
    step: 'Step 4',
    icon: '/Wallet.svg',
    title: 'Keep the Margin',
    description: 'The difference between your price and the partner rate is your pure profit.',
  },
];

const ZeroRiskSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-12 py-20 px-16 bg-white rounded-xl">
      <div className='flex flex-col items-center justify-center gap-y-8'>
        <div className='flex flex-col gap-y-6 items-center'>
          <div className="flex flex-col items-center text-center gap-y-3">
            <h2 className="font-medium text-[40px] leading-[120%] text-[#121212]">Zero risk. pay only when you profit.</h2>
            <p className="font-normal text-lg text-[#667085]">Simple partnership model designed for your success</p>
          </div>
          <div className="flex items-center gap-x-3">
            <span className="px-3 py-2 bg-[#FFF7F5] border border-[#FFD7CC] text-[#E34013] rounded-full text-base">No upfront fees</span>
            <span className="px-3 py-2 bg-[#FFF7F5] border border-[#FFD7CC] text-[#E34013] rounded-full text-base">No subscription</span>
            <span className="px-3 py-2 bg-[#FFF7F5] border border-[#FFD7CC] text-[#E34013] rounded-full text-base">No commitment</span>
          </div>
        </div>
        <Button type="primary" danger style={{ backgroundColor: '#E34013', padding: '10px 24px', height: 'auto', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px' }}>
          Become A Partner
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 self-stretch">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-start p-1 bg-[#F6F6F6] rounded-lg gap-y-1">
            <p className="font-normal text-base text-black px-3 py-1 rounded-lg bg-white w-full">{step.step}</p>
            <div className="flex flex-col gap-y-6 px-4 pt-4 pb-6 bg-white rounded-lg self-stretch h-full">
              <div className='w-12 h-12 rounded-lg flex items-center justify-center' style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%), #E34013' }}>
                <Image src={step.icon} alt="Icon" width={32} height={32} />
              </div>
              <div className='flex flex-col gap-y-2'>
                <h3 className="font-medium text-xl text-black">{step.title}</h3>
                <p className="font-normal text-base text-[#667085]">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ZeroRiskSection;
