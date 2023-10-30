import { NavLink } from 'react-router-dom';
import { Item } from '../../components/Item/Item';
import { Items } from '../../components/Items/Items';
import { Heading } from '../../components/Heading/Heading';
import styles from './Categories.module.css';
import cn from 'classnames';

interface ItemProps {
    id: number,
    name: string
}

const categories: ItemProps[] = [
    { id: 1, name: 'Категория 1' },
    { id: 2, name: 'Категория 2' },
    { id: 3, name: 'Категория 3' }
];

export function Categories() {

    return <>
        <Heading>Категории</Heading>
        <Items>
            {categories.map(el => (
                <NavLink
                    className={({ isActive }) => cn(styles['cat-link'], {
                        [styles.active]: isActive
                    })}
                    to={`/categories/${el.id}`}
                    key={el.id}
                    state={el}
                >
                    <Item itemName={el.name} />
                </NavLink>
            ))}
        </Items>
    </>;
}