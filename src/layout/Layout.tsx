import {NavLink, Outlet} from 'react-router-dom';
import styles from './Layout.module.css';
import {Button} from '../components/Button/Button.tsx';
import cn from 'classnames';

export function Layout() {
    return (
        <div className='container-fluid'>
            <div className='row vh-100'>
                <div className={cn(
                    'col-auto',
                    'd-flex',
                    'flex-column',
                    'justify-content-between'
                )}>
                    <div>
                        <NavLink
                            to='/'
                            className={({isActive}) => cn(
                                'm-2',
                                styles['link'],
                                {[styles.active]: isActive}
                            )}>
                            Главная
                        </NavLink>
                        <NavLink
                            to='/categories'
                            className={({isActive}) => cn(
                                'm-2',
                                styles['link'],
                                {[styles.active]: isActive}
                            )}>
                            Категории
                        </NavLink>
                        <NavLink
                            to='/services'
                            className={({isActive}) => cn(
                                'm-2',
                                styles['link'],
                                {[styles.active]: isActive}
                            )}>
                            Услуги
                        </NavLink>
                        <NavLink
                            to='/users'
                            className={({isActive}) => cn(
                                'm-2',
                                styles['link'],
                                {[styles.active]: isActive}
                            )}>
                            Пользователи
                        </NavLink>
                    </div>
                        <div className={cn(styles['admin'], 'm-2')}>
                            <div className={styles['admin-credentials']}>
                                <div className={styles['admin-name']}>
                                    Сергей Никитин
                                </div>
                                <div className={styles['admin-email']}>
                                    ar10n@ya.ru
                                </div>
                            </div>
                            <Button
                                className={styles['exit']}
                                appearence='big'
                                accent='primary'
                            >
                                Выйти
                            </Button>
                        </div>
                </div>
                <div className='col'>
                    <Outlet/>
                </div>
            </div>
        </div>
    );
}