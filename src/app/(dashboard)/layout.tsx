'use client';

import React from 'react';
import { Layout } from 'antd';
import Sidebar from '@/components/Sidebar';
import DashboardHeader from '@/components/DashboardHeader';

const { Content } = Layout;

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout id='dashboard-layout' style={{ overflow: 'hidden' }}>
      <Sidebar />
      <Layout id='dashboard-content' style={{ flex: 1, overflow: 'auto', padding: '32px' }}>
        <DashboardHeader />
        <Content>
          {children}
        </Content>
      </Layout>
    </Layout>
  );
};

export default DashboardLayout;
