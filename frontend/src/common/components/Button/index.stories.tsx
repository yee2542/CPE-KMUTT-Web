import { Meta, Story } from '@storybook/react/types-6-0';
import React from 'react';
import Button from '.';
import { ButtonProps } from './types';
import { HiOutlineArrowRight } from 'react-icons/hi';

export default {
  title: 'Commmon/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
    // color: { control: 'color' },
  },
} as Meta;

const Template: Story<ButtonProps> = (args) => (
  <Button {...args}>
    สำรวจหลักสูตรทั้งหมด
    <HiOutlineArrowRight className="Icon" style={{ marginLeft: '15px' }} size="20px" />
  </Button>
);

export const Primary = Template.bind({});
Primary.args = {
  color: 'primary',
};

export const Transparent = Template.bind({});
Transparent.args = {
  color: 'transparent',
};
