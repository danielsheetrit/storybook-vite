import type { Meta, StoryObj } from "@storybook/react";
import { userEvent, within } from '@storybook/testing-library';

import Button from "../components/Button";

const meta: Meta<typeof Button> = {
  component: Button,
  title: "Button",
  tags: ['autodocs'], // Enableing Docs
    //   decorators: [], General decorator
  argTypes: {
    variant: {
        control: { type: 'select' },
        options: ['primary', 'secondary']
    },
    size: {
        control: { type: 'select' },
        options: ['sm', 'md']
    }
  }
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryMedium: Story = {
  args: {
    title: "Primary Medium",
    variant: "primary",
    size: "md",
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);

    const button = canvas.getByRole('button');

    await userEvent.click(button)
  }
};

export const PrimarySmall: Story = {
  args: {
    title: "Primary Small",
    variant: "primary",
    size: "sm",
  },
};

export const SecondarySmall: Story = {
  args: {
    title: "Secondary Small",
    variant: "secondary",
    size: "sm",
  },
};

export const Together: Story = {
  render: (_args) => (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
        <Button variant="secondary" size="sm" title="IM SMALL" />
        <div style={{ marginTop: '12px' }} />
        <Button variant="secondary" size="md" title="IM Medium" />
    </div>
  ),
};

export const withDecorator: Story = {
    decorators: [
        (Story) => (
            <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>
                <Story args={{ size: 'sm', title: 'Im inside decorator' }} />
            </div>
        )
    ]
}


// Airbnb
// https://airbnb.io/lunar/?path=/story/core-accordion--custom-title-component