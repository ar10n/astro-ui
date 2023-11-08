import styles from './Category.module.css';
import { Button } from '../Button/Button.tsx';
import { CategoryDetails } from './CategoryDetails.tsx';

export function Category() {
    return <>
        <div className={styles['content']}>
            <CategoryDetails />
            <div className={styles['buttons']}>
                <Button
                    className={styles['edit']}
                    appearence='big'
                    accent='primary'
                >
                    Редактировать
                </Button>
                <Button
                    className={styles['delete']}
                    appearence='big'
                    accent='danger'
                >
                    Удалить
                </Button>
            </div>
        </div>

    </>;
}