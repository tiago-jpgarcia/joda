// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/vue3';
import ButtonComponent  from '@/components/Atom/ButtonComponent.vue';
import TextComponent from '@/components/Atom/TextComponent.vue';
import Colors from './color.json';

const meta = {
  title: 'Atom/ButtonComponent',
  component: ButtonComponent,
  argTypes: {
    backgroundColor:{
        options: Colors,
        control: {
          type: 'select',
          labels: Colors
        }
    },
    color: {
        options: Colors,
        control: {
          type: 'select',
          labels: Colors
        }
    },
  },
  render: (args: any) => ({
    components: { ButtonComponent, TextComponent },
    setup() {
      return { args };
    },
    template: `<ButtonComponent 
        :paddingH="args.paddingH"
        :paddingV="args.paddingV"
        :margin="args.margin"
        :backgroundColor="args.backgroundColor"
        :color="args.color"
        :rounded="args.rounded"
        :borderColor="args.borderColor"
        :text="args.text"
        :textSize="args.textSize"
    >
    </ButtonComponent>`,
  }),

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ButtonComponent >;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Button',
    rounded: false,
    paddingH: 2,
    paddingV: 1,
    margin: 0,
    borderColor: '#000',
    textSize: 1
  }
};
