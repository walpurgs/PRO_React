import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Text, ThemeText } from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const TextLight = Template.bind({});
TextLight.args = {
    text: 'Text',
};

export const TextDark = Template.bind({});
TextDark.args = {
    text: 'Text',
};
TextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleLight = Template.bind({});
TitleLight.args = {
    title: 'Title',
};

export const TitleDark = Template.bind({});
TitleDark.args = {
    title: 'Title',
};
TitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleAndTextLight = Template.bind({});
TitleAndTextLight.args = {
    title: 'Title',
    text: 'Text',
};

export const TitleAndTextDark = Template.bind({});
TitleAndTextDark.args = {
    title: 'Title',
    text: 'Text',
};
TitleAndTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const TitleAndTextErrorLight = Template.bind({});
TitleAndTextErrorLight.args = {
    title: 'Title',
    text: 'Text',
    theme: ThemeText.ERROR,
};

export const TitleAndTextErrorDark = Template.bind({});
TitleAndTextErrorDark.args = {
    title: 'Title',
    text: 'Text',
    theme: ThemeText.ERROR,
};
TitleAndTextErrorDark.decorators = [ThemeDecorator(Theme.DARK)];
