import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Modal } from './Modal';

export default {
    title: 'widgets/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit.
	Minus obcaecati quos quia assumenda aspernatur vero, nihil eum similique quod 
	sapiente rerum optio enim veritatis esse? Nulla quia autem aspernatur eum.`,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
	Minus obcaecati quos quia assumenda aspernatur vero, nihil eum similique quod 
	sapiente rerum optio enim veritatis esse? Nulla quia autem aspernatur eum.`,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
