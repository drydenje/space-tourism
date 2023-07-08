import type { Meta, StoryObj } from '@storybook/react';

import NavBar from './NavBar';

const meta: Meta<typeof NavBar> = {
  title: 'Components/NavBar',
  component: NavBar,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    }
  }
}

export default meta;
type Story = StoryObj<typeof NavBar>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'NavBar',
  }
}