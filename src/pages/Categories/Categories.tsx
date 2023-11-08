import { NavLink, Outlet } from 'react-router-dom';
import { categories } from '../../../data.ts';
import styles from './Categories.module.css';
import cn from 'classnames';
import { Button } from '../../components/Button/Button.tsx';

export function Categories() {
    const cats = categories.map(category =>
            <NavLink
                to={`/categories/${category.id}`}
                className={({ isActive }) => cn(styles['link'], {
                    [styles.active]: isActive
                })}
                key={category.id}
            >
                {category.name}
            </NavLink>
    );

    return <>
        <div className={styles['content']}>
            <div className={styles['list']}>
                <div className={styles['menu']}>
                    {cats}
                </div>
                <div className={styles['buttons']}>
                    <Button
                        className={styles['create']}
                        appearence='big'
                        accent='primary'
                    >
                        Создать
                    </Button>
                </div>
            </div>
            <div className={styles['details']}>
                <Outlet/>
            </div>
        </div>

    </>;
}