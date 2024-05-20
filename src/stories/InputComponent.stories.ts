// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/vue3';
import InputComponent  from '@/components/Atom/InputComponent.vue';
import Colors from './color.json';

const meta = {
  title: 'InputComponent',
  component: InputComponent,
  argTypes: {
    backgroundColor:{
        options: Colors,
        control: {
            type: 'select',
            labels: Colors
        }
    },
  },
  render: (args: any) => ({
    components: { InputComponent },
    setup() {
      return { args };
    },
    template: `<InputComponent
            :backgroundColor="args.backgroundColor" 
            :text="args.text" 
            :value="args.value" 
            :borderColor="args.borderColor"
            :placeholder="args.placeholder"
        />`,
  }),

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof InputComponent >;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: '',
    value: '',
    borderColor: '#000',
    placeholder: 'Placeholder',
  }
};
