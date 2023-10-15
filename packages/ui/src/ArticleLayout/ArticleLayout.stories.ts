import type { Meta, StoryObj } from "@storybook/react";

import { ArticleLayout } from "./ArticleLayout";

const meta = {
  title: "Example/ArticleLayout",
  component: ArticleLayout,
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
  argTypes: {},
} satisfies Meta<typeof ArticleLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    date: "2011-10-05",
    title: "Some kind of article",
    children: "Article Children",
  },
};
