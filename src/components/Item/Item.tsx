export function Item({ ...props }) {
    const name: string = props.itemName;

    return (
        <li>{name}</li>
    );
}
