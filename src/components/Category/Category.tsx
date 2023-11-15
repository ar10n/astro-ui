import styles from './Category.module.css';
import { Button } from '../Button/Button.tsx';
import { NavLink, useParams } from 'react-router-dom';
import cn from 'classnames';
import { useEffect, useState } from 'react';
import { CategoryInterface } from '../../interfaces/Category.interface.ts';
import axios from 'axios';
import { PREFIX } from '../../helpers/api.ts';

export function Category() {
    const {id} = useParams();
    const [category, setCategory] = useState<CategoryInterface>({
        description: '',
        id: 0,
        isPayable: false,
        name: '',
        orderNumber: 0
    });
    const getCategory = async () => {
        try {
            const {data} = await axios.get<CategoryInterface>(
              `${PREFIX}/categories/${id}`
            );
            setCategory(data);
        } catch (e) {
            console.error(e);
            return;
        }
    };

    useEffect(() => {
        getCategory();
    }, [getCategory]);

    return <>
        <div className={styles['content']}>
            <div className={styles['details']}>
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
            </div>
            <div className={styles['buttons']}>
                <NavLink
                    to={`/categories/${category.id}/update`}
                    className={({ isActive }) => cn(styles['link'], {
                        [styles.active]: isActive
                    })}
                >
                    <Button
                        className={styles['edit']}
                        appearence='big'
                        accent='primary'
                    >
                        Редактировать
                    </Button>
                </NavLink>
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