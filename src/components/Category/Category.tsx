import styles from './Category.module.css';
import {Button} from '../Button/Button.tsx';
import {Form, NavLink, useParams} from 'react-router-dom';
import cn from 'classnames';
import {useEffect, useState} from 'react';
import {CategoryInterface} from '../../interfaces/Category.interface.ts';
import axios from 'axios';
import {PREFIX} from '../../helpers/api.ts';

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
    }, [id]);

    return <div className={cn(
        'row vh-100',
        'd-flex',
        'flex-column',
        'justify-content-between'
    )}>
        <Form method='post' className='p-5'>
            <div className='mb-3'>
                <label
                    htmlFor='name'
                    className='form-label h4'
                >
                    Название категории:
                </label>
                <input
                    type='text'
                    className='form-control-plaintext'
                    id='name'
                    readOnly={true}
                    value={category.name}
                />
            </div>
            <div className='mb-3'>
                <label
                    htmlFor='description'
                    className='form-label h4'
                >
                    Описание:
                </label>
                <textarea
                    className='form-control-plaintext'
                    id='description'
                    readOnly={true}
                    value={category.description}
                    rows={10}
                />
            </div>
        </Form>
        <div className={cn(
            styles['buttons'],
            'p-2',
            'd-flex',
            'justify-content-around'
        )}>
            <NavLink
                to={`/categories/${category.id}/update`}
                className={({isActive}) => cn(styles['link'], {
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
    </div>;
}