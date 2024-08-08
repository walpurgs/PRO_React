import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/themeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { Button, SizeButton, ThemeButton } from './Button';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Clear',
    theme: ThemeButton.CLEAR,
};

export const OutlineLight = Template.bind({});
OutlineLight.args = {
    children: 'Outline',
    theme: ThemeButton.OUTLINE,
};

export const OutlineLightSizeL = Template.bind({});
OutlineLightSizeL.args = {
    children: 'Outline',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.L,
};

export const OutlineLightSizeXL = Template.bind({});
OutlineLightSizeXL.args = {
    children: 'Outline',
    theme: ThemeButton.OUTLINE,
    size: SizeButton.XL,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Outline',
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Background = Template.bind({});
Background.args = {
    children: 'Background',
    theme: ThemeButton.BACKGROUND,
};

export const BackgroundInverted = Template.bind({});
BackgroundInverted.args = {
    children: 'Background',
    theme: ThemeButton.BACKGROUND_INVERTED,
};

export const Square = Template.bind({});
Square.args = {
    children: 'M',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
};

export const SquareSizeL = Template.bind({});
SquareSizeL.args = {
    children: 'L',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.L,
};

export const SquareSizeXL = Template.bind({});
SquareSizeXL.args = {
    children: 'XL',
    theme: ThemeButton.BACKGROUND_INVERTED,
    square: true,
    size: SizeButton.XL,
};

export const DisabledLight = Template.bind({});
DisabledLight.args = {
    children: 'Disabled',
    theme: ThemeButton.BACKGROUND_INVERTED,
    disabled: true,
};

export const DisabledDark = Template.bind({});
DisabledDark.args = {
    children: 'Disabled',
    theme: ThemeButton.BACKGROUND_INVERTED,
    disabled: true,
};
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];
