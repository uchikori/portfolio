import React from "react";
import { useState } from "react";
import * as styles from "./Load.module.scss";


export const Load = (props) => {

    const { data } = props;

    const [ loading, setLoading] = useState(true);
    setTimeout(() => {
        setLoading(false)
    }, 2000);

    return (
        <>
            { loading ? 
            <div className={styles.loading}>
                <div className={styles.loading__inner}>
                    <div className={styles.loading__spin}>
                        <div className={styles.a1}></div>
                        <div className={styles.a2}></div>
                    </div>
                    <div className={styles.loading__text}>Loading</div>
                </div>
            </div>
            :
            ''
            }
        </>
    )
}