import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { StoreDecorator } from 'shared/config/storybook/storeDecorator/StoreDecorator';
import { LoginForm } from './LoginForm';

export default {
    title: 'features/LoginForm',
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({ loginForm: { username: 'username', password: 'password' } })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({ loginForm: { username: 'username', password: 'password' } }),
];

export const ErrorLight = Template.bind({});
ErrorLight.args = {};
ErrorLight.decorators = [
    StoreDecorator({
        loginForm: {
            username: 'username', password: 'password', error: 'Massenge error',
        },
    }),
];

export const ErrorDark = Template.bind({});
ErrorDark.args = {};
ErrorDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            username: 'username', password: 'password', error: 'Massenge error',
        },
    }),
];

export const LoadingLight = Template.bind({});
LoadingLight.args = {};
LoadingLight.decorators = [
    StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    }),
];

export const LoadingDark = Template.bind({});
LoadingDark.args = {};
LoadingDark.decorators = [
    ThemeDecorator(Theme.DARK),
    StoreDecorator({
        loginForm: {
            isLoading: true,
        },
    }),
];
