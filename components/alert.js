import { clsx } from "clsx";
import styles from "./alert.module.css"


const Alert = ({children, type})=> {
    return (
        <div className={clsx({
            [styles.sucess]: type==="sucess",
            [styles.error]: type===error
        })}>
            {children}
        </div>
    );
}