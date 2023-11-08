import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

export function Button({
    children,
    className,
    appearence = 'small',
    accent,
    ...props
}: ButtonProps) {
    return (
        <button className={cn(styles['button'], className, {
            [styles['small']]: appearence === 'small',
            [styles['big']]: appearence === 'big'
        }, {
            [styles['primary']]: accent === 'primary',
            [styles['danger']]: accent === 'danger'
        })} {...props}>{children}</button>
    );
}
