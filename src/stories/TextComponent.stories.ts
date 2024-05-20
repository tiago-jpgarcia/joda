// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/vue3';
import TextComponent from '@/components/Atom/TextComponent.vue';

const meta = {
  title: 'Atom/TextComponent',
  component: TextComponent,
  render: (args: any) => ({
    components: { TextComponent },
    setup() {
      return { args };
    },
    template: `<TextComponent 
        :text="args.text" 
        :size="args.size" 
        :bold="args.bold" 
        :isTitle="args.isTitle" 
        :isSubTitle="args.isSubTitle"
        :color="args.color"
        :italic="args.italic"
        :isUpper="args.isUpper"
    />`,
  }),
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof TextComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: 'Example Text',
    bold: false,
    italic: false,
    size: 2,
    isTitle: false,
    isSubTitle: false,
    color: '#000',
    isUpper: false,
  },
};
