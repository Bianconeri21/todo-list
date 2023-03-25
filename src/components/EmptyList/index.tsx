import React from "react";

import styles from "./EmptyList.module.scss";

const EmptyList: React.FC = () => {
    return(
        <div className={styles.root}>
            <p>You have not todos now</p>
        </div>
    )
}

export default EmptyList