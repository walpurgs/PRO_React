import { classNames } from 'shared/lib/classNames/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

export const App = () => {
    const { theme, toggleTheme } = useTheme();
    const dispath = useDispatch();

    useEffect(() => {
        dispath(userActions.initAuthData());
    }, [dispath]);

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
                <Navbar />
                <main className="content-page">
                    <Sidebar />
                    <AppRouter />
                </main>
            </Suspense>
        </div>
    );
};
