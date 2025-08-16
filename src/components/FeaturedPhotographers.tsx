import { Button } from 'antd';
import Image from 'next/image';
import React from 'react';

const photographers = [
  {
    name: 'Sukiman Marjo',
    location: 'Malang, Indonesia',
    albums: 12,
    image: 'https://res.cloudinary.com/dqipjpy1w/image/upload/v1755318959/Image_2_t3q0sc.png',
  },
  {
    name: 'Marieza Picture',
    location: 'Jakarta, Indonesia',
    albums: 12,
    image: 'https://res.cloudinary.com/dqipjpy1w/image/upload/v1755318959/Image_3_pajylj.png',
  },
  {
    name: 'Jamie Chen',
    location: 'Solo, Indonesia',
    albums: 12,
    image: 'https://res.cloudinary.com/dqipjpy1w/image/upload/v1755318959/Image_4_w92gxe.png',
  },
  {
    name: 'Ciao Irawan',
    location: 'Surabaya, Indonesia',
    albums: 12,
    image: 'https://res.cloudinary.com/dqipjpy1w/image/upload/v1755318959/Image_5_b5zszh.png',
  },
];

const FeaturedPhotographers: React.FC = () => {
  return (
    <div className="w-full flex flex-col items-start justify-center gap-y-12 py-20 px-16 bg-[#45090A] rounded-xl">
      <div className="flex flex-col items-start gap-y-4 max-w-[711px] w-full">
        <h2 className="font-medium text-[40px] leading-[120%] text-white">Put your name in the spotlight</h2>
        <p className="font-normal text-lg text-white">Every partner photographer gets their own dedicated profile page on the Memoify platform — a professional portfolio space that attracts thousands of monthly visitors.</p>
      </div>
      <div className='flex flex-col gap-y-6 w-full'>
        <div className="flex justify-between items-center self-stretch">
          <p className='font-medium text-2xl text-white'>Featured Partners Photographers</p>
          <Button style={{ backgroundColor: 'white', color: '#121212', padding: '10px 24px', height: 'auto', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px' }}>
            Browse All Photographer
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 self-stretch">
          {photographers.map((photographer, index) => (
            <div key={index} className="flex flex-col bg-white rounded-lg overflow-hidden">
              <Image src={photographer.image} alt={photographer.name} width={300} height={300} className="w-full object-cover" />
              <div className="flex flex-col p-4 gap-y-3">
                <div className="flex flex-col gap-y-1">
                  <h3 className="font-medium text-base text-black">{photographer.name}</h3>
                  <div className="flex items-center gap-x-1">
                    <Image src="/MapPin.svg" alt="Map Pin" width={16} height={16} />
                    <p className="font-normal text-sm text-[#667085]">{photographer.location}</p>
                  </div>
                </div>
                <div className="w-full h-[1px] bg-[#E2E2E2]"></div>
                <div className="flex justify-between items-center">
                  <p className="font-normal text-xs text-[#667085]"><span className="font-medium text-[#121212]">{photographer.albums}</span> Album Created</p>
                  <Button style={{ backgroundColor: 'white', padding: '8px', height: 'auto', borderRadius: '4px', fontWeight: 'normal', fontSize: '12px', color: 'black', border: '1px solid #EEEEEE' }} >View Profile <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.66663 11.3333L11.3333 4.66667M11.3333 4.66667H4.66663M11.3333 4.66667V11.3333" stroke="#121212" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round" />
                  </svg></Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPhotographers;
