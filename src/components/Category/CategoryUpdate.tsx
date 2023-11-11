import styles from './Category.module.css';
import { NavLink, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Button } from '../Button/Button.tsx';
import { categories } from '../../../data.ts';

export function CategoryUpdate() {
    const {id} = useParams();
    const category = categories.find(category => category.id === Number(id));

    return <div className={styles['content']}>
        <div className={styles['details']}>
            <form>
                <div className={'details-pair'}>
                    <div className={styles['heading']}>Название:</div>
                    <input type="text" className={styles['name']}/>
                </div>
                <div className={'details-pair'}>
                    <div className={styles['heading']}>Описание:</div>
                    <textarea name='description' cols={30} rows={10}></textarea>
                </div>
            </form>
        </div>
        <div className={styles['buttons']}>
            <Button
                className={styles['edit']}
                appearence='big'
                accent='primary'
            >
                Сохранить
            </Button>
            <NavLink
                to={`/categories/${category.id}`}
                className={({isActive}) => cn(styles['link'], {
                    [styles.active]: isActive
                })}
            >
                <Button
                    className={styles['delete']}
                    appearence='big'
                    accent='danger'
                >
                    Не сохранять
                </Button>
            </NavLink>
        </div>
    </div>;
}