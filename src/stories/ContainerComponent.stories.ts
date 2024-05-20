// Replace your-framework with the name of your framework
import type { Meta, StoryObj } from '@storybook/vue3';
import ContainerComponent  from '@/components/Organisms/ContainerComponent.vue';
import InputComponent  from '@/components/Atom/InputComponent.vue';
import Colors from './color.json';

const meta = {
  title: 'Organisms/ContainerComponent',
  component: ContainerComponent,
  render: (args: any) => ({
    components: { ContainerComponent, InputComponent },
    argTypes: {
       backgroundColor:{
        options: Colors,
          control: {
              type: 'select',
              labels: Colors
          }
      },
    },
    setup() {
      return { args };
    },
    template: `
        <ContainerComponent 
          :backgroundColor="args.backgroundColor" 
        >
          <template v-slot:container>
            <InputComponent />
          </template>
        </ContainerComponent>
        `,
  }),

  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof ContainerComponent >;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  }
};
