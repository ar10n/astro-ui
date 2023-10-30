import { Heading } from '../Heading/Heading';
import styles from './Category.module.css';
import { CategoryDetails } from './CategoryDetails/CategoryDetails';

const categoryDetails = {
    id: 1,
    name: 'Категория',
    description: 'Описание первой категории',
    isPayable: true
};

export function Category() {
    return (
        <>
            <div className={styles['details']}>
                <Heading>Детали категории</Heading>
                <CategoryDetails
                    id={categoryDetails.id}
                    name={categoryDetails.name}
                    description={categoryDetails.description}
                    isPayable={categoryDetails.isPayable}
                ></CategoryDetails>
            </div >
        </>
    );
}