import {NavLink, Outlet} from 'react-router-dom';
import styles from './Categories.module.css';
import cn from 'classnames';
import {Button} from '../../components/Button/Button.tsx';
import {useEffect, useState} from 'react';
import {CategoryInterface} from '../../interfaces/Category.interface.ts';
import axios from 'axios';
import {PREFIX} from '../../helpers/api.ts';

export function Categories() {
    const [categories, setCategories] = useState<CategoryInterface[]>([]);
    const getCategories = async () => {
        try {
            const {data} = await axios.get<CategoryInterface[]>(
                `${PREFIX}/categories/`
            );
            setCategories(data);
        } catch (e) {
            console.error(e);
            return;
        }
    };

    useEffect(() => {
        getCategories();
    }, []);

    return <>
        <div className='row vh-100'>
            <div className='
                col-auto
                d-flex
                flex-column
                justify-content-between
            '>
                <div>
                    {categories.map(category =>
                        <NavLink
                            to={`/categories/${category.id}`}
                            className={({isActive}) => cn(
                                'm-2',
                                styles['link'],
                                {[styles.active]: isActive}
                            )}
                            key={category.id}
                        >
                            {category.name}
                        </NavLink>)}
                </div>
                <div className={styles['buttons']}>
                    <Button
                        className='m-2'
                        appearence="big"
                        accent="primary"
                    >
                        Создать
                    </Button>
                </div>
            </div>
            <div className='col'>
                <Outlet/>
            </div>
        </div>
    </>;
}