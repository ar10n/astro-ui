import { CategoryDetailsProps } from './CategoryDetails.props';

export function CategoryDetails({
    id,
    name,
    description,
    isPayable
}: CategoryDetailsProps) {
    return (
        <>
            <div>{id}</div>
            <div>{name}</div>
            <div>{description}</div>
            <div>
                <label htmlFor='isPayable'>Оплачиваемая категория?</label>
                <input
                    type='checkbox'
                    id='isPayable'
                    name='isPayable'
                    disabled
                    checked={isPayable}>
                </input>
            </div>
        </>
    );
}