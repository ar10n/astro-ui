import { Outlet } from 'react-router-dom';
import styles from './Items.module.css';
import { ItemsProps } from './Items.props';


export function Items({ children }: ItemsProps) {
    return <>
        <div className={styles['items']}>
            <ul className={styles['items-list']}>
                {children}
            </ul>
            <div className={styles['items-details']}>
                <Outlet />
            </div>
        </div>
    </>;
}
