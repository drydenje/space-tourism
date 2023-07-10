// import { DestinationPicker } from '@/components/DestinationPicker';
import type { Meta, StoryObj } from '@storybook/react';
import DestinationPicker from './DestinationPicker';

const meta: Meta<typeof DestinationPicker> = {
  title: 'Components/DestinationPicker',
  component: DestinationPicker,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: {
      control: 'color',
    }
  }
}

export default meta;
type Story = StoryObj<typeof DestinationPicker>;

export const Primary: Story = {
  args: {
    primary: true,
    label: 'DestinationPicker',
  }
}