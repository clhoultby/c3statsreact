import { Stat } from './Stat';
import { Meta, StoryObj } from '@storybook/react/*';

const meta = {
    title: "Stats/Stat",
    component: Stat,
    tags: ["autodocs"],
} satisfies Meta<typeof Stat>

export default meta;
type Story = StoryObj<typeof meta>;

export const Standard: Story = {
    args: {
        topicId: "topic-id",
        value: "value"
    }
}