import styles from './CategoryDetails.module.css';
import { useParams } from 'react-router-dom';
import { categories } from '../../../data.ts';

export function CategoryDetails() {
    const {id} = useParams();
    const category = categories.find(category => category.id === Number(id));

    return <div className={styles['details']}>
        <div className={'details-pair'}>
            <div className={styles['heading']}>Название:</div>
            <div className={styles['name']}>{category.name}</div>
        </div>
        <div className={'details-pair'}>
            <div className={styles['heading']}>Описание:</div>
            <div className={styles['description']}>
                {category.description}
            </div>
        </div>
    </div>;
}