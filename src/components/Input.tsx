import React from 'react';
import { Input as AntInput } from 'antd';
import { InputProps as AntInputProps } from 'antd/lib/input';

interface InputProps extends AntInputProps {
  label?: string; // Made label optional
}

const Input: React.FC<InputProps> = ({ type, ...props }) => {
  const InputComponent = type === 'password' ? AntInput.Password : AntInput;

  return (
    <InputComponent
      {...props}
      style={{ height: '44px', padding: '12px' }}
    />
  );
};

export default Input;


