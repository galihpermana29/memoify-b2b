'use client';

import React from 'react';
import { Form, Avatar, Upload, Button as AntButton, Input as AntInput } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import AuthCard from './AuthCard';
import FormLabel from './FormLabel';
import Button from './Button';
import Image from 'next/image';
import Input from './Input';

const { TextArea } = AntInput;

const ProfileForm = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 py-12">
      <AuthCard
        logo={<div className='w-12 h-12 rounded-lg flex items-center justify-center mx-auto' style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 50%), #E34013' }}>
          <Image src='/CameraIcon.svg' alt="Icon" width={32} height={32} />
        </div>}
        title="Complete Your Photography Profile"
        subtitle="Set up your profile to get started with PhotoHub"
      >
        <Form layout="vertical" className="w-full">
          <Form.Item label={<FormLabel>Profile Photo</FormLabel>}>
            <div className="flex items-center gap-4">
              <Avatar size={64} src="https://res.cloudinary.com/dqipjpy1w/image/upload/v1755315013/Image_k8bvnt.png" />
              <Upload>
                <AntButton className='!rounded-xl !pl-4 !pr-5 !py-[9px] !h-[38px]' icon={<UploadOutlined />}>Upload Photo</AntButton>
              </Upload>
            </div>
          </Form.Item>

          <Form.Item label={<FormLabel>Display Name</FormLabel>} name="displayName">
            <Input placeholder="Memoify" />
          </Form.Item>

          <Form.Item label={<FormLabel>Display Name</FormLabel>} name="description">
            <TextArea
              rows={4}
              placeholder="Photographer with 7+ years experience"
              maxLength={100}
              showCount
            />
          </Form.Item>

          <Form.Item label={<FormLabel>Instagram</FormLabel>} name="instagram">
            <Input placeholder="@memoify.live" />
          </Form.Item>

          <Form.Item label={<FormLabel>Location</FormLabel>} name="location">
            <Input placeholder="Malang, Indonesia" />
          </Form.Item>

          <Form.Item className="!mb-0">
            <Button btnType="primary" danger htmlType="submit" block>
              Save & Continue to Dashboard
            </Button>
          </Form.Item>
        </Form>
      </AuthCard>
    </div>
  );
};

export default ProfileForm;
