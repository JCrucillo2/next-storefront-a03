import React from "react";

import styles from "./styles.module.scss";

function Button({ children, label, ...props }) {
    return (
        <div className={styles.button} {...props}>
            {label}
            {children}
        </div>
    );
}

export default Button;
