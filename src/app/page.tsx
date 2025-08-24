import Image from "next/image";
import AppHeader from '@/components/Header';
import { Button } from "antd";
import ZeroRiskSection from '@/components/ZeroRiskSection';
import FeaturedPhotographers from '@/components/FeaturedPhotographers';
import GrowthToolSection from '@/components/GrowthToolSection';
import WorkflowSection from '@/components/WorkflowSection';
import DeliverStoriesSection from '@/components/DeliverStoriesSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen px-4 pt-4 pb-2 bg-[#E2E2E2] gap-y-4">
      <AppHeader />
      <div className="font-sans w-full py-2">
        <main className="flex flex-col gap-y-4 items-center sm:items-start">
          <div className="flex items-start self-stretch gap-x-4 w-full">
            <div className="flex flex-col items-start justify-center gap-y-6 px-16 py-20 bg-white rounded-xl self-stretch">
              <div className="flex flex-col items-start gap-y-6">
                <h1 className="font-medium text-5xl text-[#121212]">Memoify Graduation Digital Album for Business</h1>
                <p className="font-normal text-lg text-[#667085]">You capture once-in-a-lifetime moments. We help you deliver them in a way that keeps your name remembered and shared, long after the shoot is over.</p>
              </div>
              <div className="flex items-center gap-x-4">
                <Button type="primary" danger style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#E34013', padding: '10px 16px', height: '44px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', lineHeight: '24px' }}>
                  Start Free Trial
                </Button>
                <Button type="primary" danger style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#fff', padding: '10px 16px', height: '44px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', lineHeight: '24px', color: '#E34013', border: '1px solid #E34013' }}>
                  See a Live Demo
                </Button>
              </div>
            </div>
            <div className="w-full max-w-[619px]">
              <Image src="https://res.cloudinary.com/dqipjpy1w/image/upload/v1755315013/Image_k8bvnt.png" alt="Image Hero" width={619} height={747} className="rounded-xl" />
            </div>
          </div>
          <div className="w-full flex flex-col items-center pt-16 justify-center gap-y-[45px] bg-[#45090A] overflow-hidden rounded-xl">
            <div className="flex flex-col items-center text-center gap-y-4 w-full max-w-[659px]">
              <h2 className="font-medium text-[40px] leading-[120%] text-white">Great photos deserve more than a download link</h2>
              <p className="font-normal text-lg text-white">You've worked hard to capture the perfect shot, lighting, timing, emotion. But after the shoot, most clients get a simple link in their inbox.</p>
            </div>
            <Image src="https://res.cloudinary.com/dqipjpy1w/image/upload/v1755316480/Image_1_xzmf24.png" alt="Image Hero" width={983.98} height={479.11} />
          </div>
          <ZeroRiskSection />
          <FeaturedPhotographers />
          <GrowthToolSection />
          <WorkflowSection />
          <DeliverStoriesSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}