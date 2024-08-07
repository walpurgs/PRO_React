import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'widgets/Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';

interface LoginModalProps {
	className?: string
	isOpen: boolean
	onClose: () => void
}

export const LoginModal = ({ className, isOpen, onClose }: LoginModalProps) => (
    <Modal
        isOpen={isOpen}
        onClose={onClose}
        lazy
        className={(classNames('', {}, [className]))}
    >
        <LoginForm />
    </Modal>
);
