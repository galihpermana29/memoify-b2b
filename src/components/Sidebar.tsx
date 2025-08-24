'use client';

import React, { useState } from 'react';
import { ConfigProvider, Layout, Menu } from 'antd';
import {
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
  LeftOutlined,
  UserOutlined
} from '@ant-design/icons';
import Image from 'next/image';

const { Sider } = Layout;

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemSelectedBg: '#FFF2E8',
            itemSelectedColor: '#D4380D',
          },
        },
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
        trigger={<LeftOutlined />}
        theme="light"
        width={256}
      >
        <div className="p-4">
          <Image src="/LogoMemoify.svg" alt="Memoify Logo" width={140} height={32} />
        </div>
        <Menu
          defaultSelectedKeys={['1']}
          mode="inline"
          items={[
            {
              type: 'group',
              label: <span className='text-xs font-medium leading-[150%] text-[#666D80]'>GENERAL</span>,
              children: [
                {
                  key: '1',
                  icon: <PieChartOutlined />,
                  label: 'Dashboard',
                },
                {
                  key: '2',
                  icon: <DesktopOutlined />,
                  label: 'Albums',
                },
                {
                  key: '3',
                  icon: <ContainerOutlined />,
                  label: 'Template',
                },
                {
                  key: '4',
                  icon: <MailOutlined />,
                  label: 'Invoice',
                },
              ],
            },
            {
              type: 'group',
              label: <span className='text-xs font-medium leading-[150%] text-[#666D80]'>OTHER</span>,
              children: [
                {
                  key: '5',
                  icon: <UserOutlined />,
                  label: 'Profile',
                },
              ],
            },
          ]}
        />
      </Sider>
    </ConfigProvider>
  );
};

export default Sidebar;
