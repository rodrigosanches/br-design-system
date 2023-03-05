import { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@brsolut-ui/react'

export default {
  title: 'Form/MultiStep',
  component: MultiStep,
  args: {
    size: 4,
    currentSetp: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          {Story()}
        </Box>
      )
    },
  ],
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
}
export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
