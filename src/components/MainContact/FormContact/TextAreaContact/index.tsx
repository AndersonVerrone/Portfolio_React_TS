import { InputHTMLAttributes, forwardRef, ForwardedRef } from "react";
import styles from "./style.module.scss";

interface ITextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
    label?: string;
    id?: string;
    helper?: string;
}

export const TextAreaContact = forwardRef(({label, id, helper, ...rest}: ITextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
        <div className={styles.textareaContact}>
            {label&&(<label htmlFor={id}>{label}</label>)}
            <textarea  id={id} ref={ref} {...rest}></textarea>
            {helper&&(<span>{helper}</span>)}
        </div>
    )
})