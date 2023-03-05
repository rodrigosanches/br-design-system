import { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@brsolut-ui/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    children: 'Enviar',
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      actions: 'click',
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    children: 'Create New',
  },
}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create New',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancelar',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
  },
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}
