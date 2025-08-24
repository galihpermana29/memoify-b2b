'use client';

import React from 'react';
import { Layout, Typography, Avatar, Dropdown, Menu, Button } from 'antd';
import { MoreOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Title, Text } = Typography;

const menuItems = [
  {
    key: '1',
    label: 'Profile',
  },
  {
    key: '2',
    label: 'Settings',
  },
  {
    key: '3',
    label: 'Logout',
  },
];

const DashboardHeader = () => {
  return (
    <Header style={{ background: '#f5f5f5', padding: 0, display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '32px' }}>
      <h1 className='text-[32px] leading-[140%] font-medium text-[#0A0A0A]'>
        Dashboard
      </h1>
      <div className="flex items-center gap-3 rounded-full rounded border border-solid border-[#EDEDED] bg-white h-12 px-1 py-2">
        <div className='p-1 border border-solid border-[#EDEDED] rounded-full flex items-center justify-center'>
          <Avatar className='p-1 border border-solid border-[#EDEDED]' src="https://res.cloudinary.com/dqipjpy1w/image/upload/v1755315013/Image_k8bvnt.png" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm font-medium text-[#121212]">
            Memoify
          </span>
          <span className="text-xs font-normal text-[#525252]">
            memoify.live@gmail.com
          </span>
        </div>
        <div className='p-1 border border-solid border-[#EDEDED] rounded-full flex items-center justify-center h-8 w-8'>
          <Dropdown menu={{ items: menuItems }} trigger={['click']}>
            <Button shape="circle" icon={<MoreOutlined />} type="text" />
          </Dropdown>
        </div>
      </div>
    </Header>
  );
};

export default DashboardHeader;
