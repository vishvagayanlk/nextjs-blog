import { clsx } from "clsx";
import styles from "./alert.module.css"

interface AlertProps {
    children: React.ReactNode;
    type: "sucess" | "error"
}

const Alert = ({children, type}: AlertProps): React.ReactNode=> {
    return (
        <div className={clsx({
            [styles.sucess]: type==="sucess",
            [styles.error]: type==="error"
        })}>
            {children}
        </div>
    );
}

export default Alert;