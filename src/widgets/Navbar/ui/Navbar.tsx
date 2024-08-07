import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import { Modal } from 'widgets/Modal/Modal';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { useCallback, useState } from 'react';
import cls from './Navbar.module.scss';

interface NavbarProps {
	className?: string
}

export const Navbar = ({ className }:NavbarProps) => {
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <Button className={cls.links} theme={ThemeButton.CLEAR} onClick={onToggleModal}>
                {t('Войти')}
            </Button>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {/* eslint-disable */}
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus obcaecati quos quia assumenda aspernatur vero, nihil eum similique quod sapiente rerum optio enim veritatis esse? Nulla quia autem aspernatur eum.
            </Modal>
        </div>
    );
};
