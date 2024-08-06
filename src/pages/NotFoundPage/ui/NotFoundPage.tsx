import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

// interface NotFoundPageProps {
// 	className?: string
// }

export const NotFoundPage = () => {
    const { t } = useTranslation('');
    return (
        <div className={cls.notFoundPage}>
            {t('Страница не найдена')}
        </div>
    );
};
