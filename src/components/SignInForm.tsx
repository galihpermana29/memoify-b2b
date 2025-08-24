'use client';

import React from 'react';
import { Form, Checkbox } from 'antd';
import AuthCard from './AuthCard';
import Input from './Input';
import Button from './Button';
import FormLabel from './FormLabel';
import Image from 'next/image';

const SignInForm: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <AuthCard
      logo={<Image src='/LogoMemoNoText.svg' alt="Memoify Logo" width={64} height={64} className='mx-auto' />}
      title="Welcome Back To Memoify"
      subtitle="Sign in to your photography workspace"
    >
      <Form
        name="signin"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
        requiredMark={false}
      >
        <Form.Item
          label={<FormLabel>Email</FormLabel>}
          name="email"
          rules={[{ required: true, message: 'Please input your email!' }]}
          className='!mb-3'
        >
          <Input placeholder="Input your email here" />
        </Form.Item>

        <Form.Item
          label={<FormLabel>Password</FormLabel>}
          name="password"
          rules={[{ required: true, message: 'Please input your password!' }]}
          className='!mb-3'
        >
          <Input type="password" placeholder="Input your Password Here" />
        </Form.Item>

        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox><span className='text-sm font-normal leading-[140%] text-[#616161]'>Remember me</span></Checkbox>
        </Form.Item>

        <Form.Item className='!mt-6'>
          <Button type='primary' danger disabled btnType="primary" htmlType="submit" block>
            Sign In
          </Button>
        </Form.Item>
      </Form>
    </AuthCard>
  );
};

export default SignInForm;
