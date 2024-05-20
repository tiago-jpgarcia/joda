// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/vue3';
import WrapContainer  from '@/components/Organisms/WrapContainer.vue';
import InputComponent  from '@/components/Atom/InputComponent.vue';

const meta = {
  title: 'Organisms/WrapContainer',
  component: WrapContainer,
  render: (args: any) => ({
    components: { WrapContainer, InputComponent },
    setup() {
      return { args };
    },
    template: `
        <WrapContainer 
            :column="args.column"
            :wrap="args.wrap"
            :fullWidth="args.fullWidth"
        >
          <template v-slot:left>
            <InputComponent />
          </template>
          <template v-slot:right>
            <InputComponent />
          </template>
        </WrapContainer>
        `,
  }),

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof WrapContainer >;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    column: false,
    wrap: false,
    fullWidth: false
  }
};
