import React from 'react';
import { Button as AntButton } from 'antd';
import { ButtonProps as AntButtonProps } from 'antd/lib/button';
import { cn } from '@/lib/utils';

interface ButtonProps extends AntButtonProps {
  btnType?: 'primary' | 'default' | 'dashed' | 'link' | 'text' | 'ghost';
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, btnType = 'primary', disabled, ...props }) => {
  return (
    <AntButton
      disabled={disabled}
      {...props}
      className={cn(
        "w-full !h-12 !px-5 !py-3 !text-base !font-medium !rounded-xl !shadow-sm transition-colors !leading-[140%]",
        {
          '!bg-[#E34013] !text-white hover:!bg-orange-700': btnType === 'primary' && !disabled,
          // Add styles for other btnTypes here if needed
        },
        {
          '!bg-[#FBCDAD] !text-[#FFFFFF] !border-none': disabled,
        }
      )}
    >
      {children}
    </AntButton>
  );
};

export default Button;


