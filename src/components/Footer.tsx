import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const footerLinks = ['Photobox', 'Memories Websites', 'Pricing', 'Inspiration', 'Contact'];

const socialIcons = [
  { src: '/XIcon.svg', alt: 'X' },
  { src: '/InstagramIcon.svg', alt: 'Instagram' },
  { src: '/TiktokIcon.svg', alt: 'Tiktok' },
  { src: '/FacebookIcon.svg', alt: 'Facebook' },
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full flex flex-col items-start justify-center gap-y-8 pt-16 pb-12 px-16 bg-[#1B1B1B] text-white rounded-xl mt-4">
      <div className="w-full flex flex-col items-start gap-y-8">
        <Image src="/LogoMemoifyWhite.svg" alt="Logo" width={142} height={32} />
        <p className="text-base font-normal text-[#94969C]">Add personal touches and let your memories shine!</p>
        <div className="flex items-center gap-x-8">
          {footerLinks.map((link, index) => (
            <Link key={index} href="#" className="text-base font-semibold text-[#94969C]">
              {link}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-full h-[1px] bg-gray-700 mt-16 mb-8"></div>
      <div className="w-full flex justify-between items-center">
        <p className="text-base font-normal text-[#94969C]">© 2025 Memoify. All rights reserved.</p>
        <div className="flex items-center gap-x-4">
          {socialIcons.map((icon, index) => (
            <a key={index} href="#" className="hover:opacity-75">
              <Image src={icon.src} alt={icon.alt} width={24} height={24} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
