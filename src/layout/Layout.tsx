import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import { Button } from '../components/Button/Button.tsx';
import cn from 'classnames';

export function Layout() {

    return <div className={styles['layout']}>
        <div className={styles['sidebar']}>
            <div className={styles['menu']}>
                <NavLink
                    to='/'
                    className={({ isActive }) => cn(styles['link'], {
                        [styles.active]: isActive
                    })}>
                    Главная
                </NavLink>
                <NavLink
                    to='/categories'
                    className={({ isActive }) => cn(styles['link'], {
                        [styles.active]: isActive
                    })}>
                    Категории
                </NavLink>
                <NavLink
                    to='/services'
                    className={({ isActive }) => cn(styles['link'], {
                        [styles.active]: isActive
                    })}>
                    Услуги
                </NavLink>
                <NavLink
                    to='/users'
                    className={({ isActive }) => cn(styles['link'], {
                        [styles.active]: isActive
                    })}>
                    Пользователи
                </NavLink>
            </div>
            <div className={styles['admin']}>
                <div className={styles['admin-credentials']}>
                    <div className={styles['admin-name']}>
                        Сергей Никитин
                    </div>
                    <div className={styles['admin-email']}>
                        ar10n@ya.ru
                    </div>
                </div>
                <Button className={styles['exit']} appearence='big'>
                    Выйти
                </Button>
            </div>
        </div>
        <div className={styles['content']}>
            <Outlet />
        </div>
    </div>;
}