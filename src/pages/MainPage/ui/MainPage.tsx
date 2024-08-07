import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/ui/Input';

const MainPage = () => {
    const { t } = useTranslation('main');
    const [value, setValue] = useState('');
    const onChange = (val: string) => {
        setValue(val);
    };
    return (
        <div>
            <span>{t('Главная')}</span>
        </div>
    );
};

export default MainPage;
