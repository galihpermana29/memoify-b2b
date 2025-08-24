import React from 'react';

interface FormLabelProps {
  children: React.ReactNode;
}

const FormLabel: React.FC<FormLabelProps> = ({ children }) => {
  return (
    <span className='text-sm font-medium leading-[140%] text-[#121212]'>
      {children}
    </span>
  );
};

export default FormLabel;
