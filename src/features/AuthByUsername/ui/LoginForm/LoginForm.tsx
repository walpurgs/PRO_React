import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
	className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={(classNames(cls.LoginForm, {}, [className]))}>
            <Input autofocus placeholder={t('Введите имя')} type="text" className={cls.input} />
            <Input placeholder={t('Введите пароль')} type="text" className={cls.input} />
            <Button theme={ThemeButton.BACKGROUND_INVERTED} className={cls.loginBtn}>
                {t('Войти')}
            </Button>
        </div>
    );
};
