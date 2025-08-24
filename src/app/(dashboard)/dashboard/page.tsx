'use client';

import React from 'react';
import { Card, Row, Col, Typography, Avatar } from 'antd';
import {
  FolderOutlined,
  FileTextOutlined,
  CheckCircleOutlined,
  EyeOutlined,
  HistoryOutlined,
} from '@ant-design/icons';
import Image from 'next/image';

const { Title, Text } = Typography;

const statCards = [
  {
    title: 'Album Created',
    value: 0,
    icon: <FolderOutlined style={{ color: '#fff', backgroundColor: '#4A90E2', padding: '8px', borderRadius: '50%' }} />,
  },
  {
    title: 'Template Available',
    value: 0,
    icon: <FileTextOutlined style={{ color: '#fff', backgroundColor: '#7B61FF', padding: '8px', borderRadius: '50%' }} />,
  },
  {
    title: 'Remaining Credit',
    value: 0,
    icon: <CheckCircleOutlined style={{ color: '#fff', backgroundColor: '#50E3C2', padding: '8px', borderRadius: '50%' }} />,
  },
  {
    title: 'Profile Views',
    value: 0,
    icon: <EyeOutlined style={{ color: '#fff', backgroundColor: '#E34013', padding: '8px', borderRadius: '50%' }} />,
  },
];

const DashboardPage = () => {
  return (
    <div className='flex flex-col gap-y-6'>
      <div className='flex flex-col gap-y-8 p-6 rounded-2xl bg-white border border-solid border-[#EDEDED]'>
        <h2 className='text-lg font-semibold text-[#0A0A0A] flex items-center'>
          <Image src='/PreviewIcon.svg' alt="Icon" width={18} height={19} className='mr-2 inline' /> Preview
        </h2>
        <Row gutter={[16, 16]}>
          {statCards.map((card, index) => (
            <Col xs={24} sm={12} md={6} key={index}>
              <Card className="h-full !rounded-2xl">
                <div className="flex flex-col justify-between h-full">
                  <div className="flex items-center gap-x-3">
                    {card.icon}
                    <Text className="!text-lg !font-semibold !text-[#0A0A0A]">{card.title}</Text>
                  </div>
                  <Title className="!mt-4 !mb-0 !text-[32px] !font-semibold !text-[#0A0A0A]">
                    {card.value}
                  </Title>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <div className='flex flex-col gap-y-8 p-6 rounded-2xl bg-white border border-solid border-[#EDEDED]'>
        <h2 className='text-lg font-semibold text-[#0A0A0A] flex items-center'>
          <Image src='/RecentIcon.svg' alt="Icon" width={18} height={19} className='mr-2 inline' /> Recent Activity
        </h2>
        <div className='@container flex items-center justify-center flex-col h-60 gap-y-2'>
          <p className='text-xl font-semibold text-[#000000]'>No Activity Yet</p>
          <p className='text-sm font-normal text-[#666D80] max-w-[366px] text-center'>
            Once you start creating albums, sending invoices, or updating your profile, your recent actions will appear here
          </p>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
