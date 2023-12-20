import { InputHTMLAttributes, forwardRef, ForwardedRef } from "react";
import styles from "./style.module.scss";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    id?: string;
    helper?: string;
}

export const InputContact = forwardRef(({label, id, helper, ...rest}: IInputProps, ref: ForwardedRef<HTMLInputElement>) => {
    return (
        <div className={styles.inputContact}>
            {label&&(<label htmlFor={id}>{label}</label>)}
            <input type="text" ref={ref} {...rest}/>
            {helper&&(<span>{helper}</span>)}
        </div>
    )
})