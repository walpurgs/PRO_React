import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum ThemeText {
	PRIMARY = 'primary',
	ERROR = 'error'
}

interface TextProps {
	className?: string
	title?: string
	text?: string
	theme?: ThemeText
}

export const Text = ({
    className, title, text, theme = ThemeText.PRIMARY,
}: TextProps) => (
    <div data-testid="text" className={classNames(cls.Text, { [cls[theme]]: true }, [className])}>
        {title && <p className={cls.title}>{title}</p>}
        {text && <p className={cls.text}>{text}</p>}
    </div>
);
