import Image from 'next/image';
import React from 'react';

const steps = [
  {
    title: 'Select Your Best Shots',
    description: 'Pick 8-10 “hero” images from your session.',
    image: 'https://res.cloudinary.com/dqipjpy1w/image/upload/v1755320919/Icon_iubgdy.png',
  },
  {
    title: 'Upload & Personalize',
    description: 'Add your client’s name and let our AI draft their story.',
    image: 'https://res.cloudinary.com/dqipjpy1w/image/upload/v1755321024/Icon_1_hbutre.png',
  },
  {
    title: 'Share the Link',
    description: 'Send a beautifully crafted digital album they can’t stop sharing.',
    image: 'https://res.cloudinary.com/dqipjpy1w/image/upload/v1755321038/Icon_2_zzjjlt.png',
  },
];

const WorkflowSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-y-12 py-20 px-16 bg-[#45090A] rounded-xl">
      <div className="flex flex-col items-center text-center gap-y-4">
        <h2 className="font-medium text-[40px] leading-[120%] text-white">Seamless workflow, zero hassle</h2>
        <p className="font-normal text-lg text-white">Three simple steps from shoot to share.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 self-stretch">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col items-start bg-white rounded-lg gap-y-[19px] p-1">
            <div className="w-full h-[305px] bg-[#F8F8F8] rounded-xl overflow-hidden">
              <Image src={step.image} alt={step.title} width={300} height={305} className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col items-start gap-y-[7px] px-3 pt-3 pb-5">
              <h3 className="font-medium text-xl text-black">{step.title}</h3>
              <p className="text-[#667085] font-normal text-base">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkflowSection;
