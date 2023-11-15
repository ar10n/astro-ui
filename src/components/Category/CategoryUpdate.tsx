import styles from './Category.module.css';
import { NavLink, useParams } from 'react-router-dom';
import cn from 'classnames';
import { Button } from '../Button/Button.tsx';
import { categories } from '../../../data.ts';

export function CategoryUpdate() {
    const {id} = useParams();
    const category = categories.find(category => category.id === Number(id));

    return <div className={styles['content']}>
        <form className={styles['details-update']}>
            <div className={'details-pair-update'}>
                <div>
                    <label
                        htmlFor="name"
                        className={styles['update-heading']}
                    >
                        Название:
                    </label>
                </div>
                <div>
                    <input
                        type="text"
                        id="name"
                        className={styles['update-name']}
                    />
                </div>
            </div>
            <div className={'details-pair-update'}>
                <div>
                    <label
                        htmlFor="description"
                        className={styles['update-heading']}
                    >
                        Описание:
                    </label>
                </div>
                <div>
                    <textarea
                        id="description"
                        name="description"
                        rows={10}
                    >
                    </textarea>
                </div>
            </div>
        </form>
        <div className={styles['buttons']}>
            <Button
                className={styles['edit']}
                appearence="big"
                accent="primary"
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
                    appearence="big"
                    accent="danger"
                >
                    Не сохранять
                </Button>
            </NavLink>
        </div>
    </div>;
}