'use client';

import React from 'react';
import { ConfigProvider } from 'antd';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#E34013',
        },
        components: {
          Button: {
            // This will make the primary button have white text
            colorPrimary: `text-white !bg-[#E34013]`,
            colorPrimaryActive: `text-white bg-[#E34013]`,
            colorPrimaryHover: `text-white bg-[#E34013]`,
          }
        }
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default ThemeProvider;
