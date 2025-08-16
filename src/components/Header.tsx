'use client';

import { Button, Layout, Menu, Radio, Space } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';

const { Header: AntHeader } = Layout;

const AppHeader: React.FC = () => {
  const [plan, setPlan] = useState('business');

  const menuItems = [
    {
      key: '1',
      label: 'Home',
      style: { color: '#7B7B7B', padding: '0', marginRight: '32px' },
      className: 'font-normal text-base',
    },
    {
      key: '2',
      label: 'Portfolio',
      style: { color: '#7B7B7B', padding: '0', marginRight: '32px' },
      className: 'font-normal text-base',
    },
    {
      key: '3',
      label: 'Features',
      style: { color: '#7B7B7B', padding: '0', marginRight: '32px' },
      className: 'font-normal text-base',
    },
    {
      key: '4',
      label: 'FAQ',
      style: { color: '#7B7B7B', padding: '0' },
      className: 'font-normal text-base',
    },
  ];

  return (
    <AntHeader style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '0 20px', borderBottom: '1px solid #f0f0f0', borderRadius: '12px', height: '80px' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Image src="/LogoMemoify.svg" alt="Logo" width={142} height={32} />
      </div>
      <Menu mode="horizontal" defaultSelectedKeys={['1']} items={menuItems} style={{ flex: 1, borderBottom: 'none', marginLeft: '32px', display: 'flex', alignItems: 'center' }} />
      <Space align="center" size={12}>
        <Radio.Group
          value={plan}
          onChange={(e) => setPlan(e.target.value)}
          style={{
            backgroundColor: '#F1F1F1',
            padding: '2px',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            height: '44px',
          }}
          className='custom-radio-group'
        >
          <Radio.Button
            value="business"
            style={{
              backgroundColor: plan === 'business' ? 'white' : 'transparent',
              color: '#121212',
              border: 'none',
              borderRadius: '12px',
              padding: '8px 24px',
              fontSize: '16px',
              fontWeight: 'normal',
              height: '40px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: plan === 'business' ? '0px 1px 2px rgba(0, 0, 0, 0.05)' : 'none',
            }}
          >
            Business
          </Radio.Button>
          <Radio.Button
            value="personal"
            style={{
              backgroundColor: plan === 'personal' ? 'white' : 'transparent',
              color: '#121212',
              border: 'none',
              borderRadius: '12px',
              padding: '8px 24px',
              fontSize: '16px',
              fontWeight: 'normal',
              height: '40px',
              lineHeight: '24px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: plan === 'personal' ? '0px 1px 2px rgba(0, 0, 0, 0.05)' : 'none',
            }}
          >
            Personal
          </Radio.Button>
        </Radio.Group>
        <Button type="primary" danger style={{ display: 'flex', alignItems: 'center', gap: '6px', backgroundColor: '#E34013', padding: '10px 16px', height: '44px', borderRadius: '8px', fontWeight: 'bold', fontSize: '16px', lineHeight: '24px' }}>
          Sign In with Google
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.83337 14.1667L14.1667 5.83333M14.1667 5.83333H5.83337M14.1667 5.83333V14.1667" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Button>
      </Space>
    </AntHeader>
  );
};

export default AppHeader;
