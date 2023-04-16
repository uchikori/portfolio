import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import * as styles from "./Load.module.scss";

export const Load = (props) => {
  const { hasLoadingObj } = props;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 200);
  }, []);

  return (
    <>
      {loading ? (
        hasLoadingObj ? (
          <div className={styles.loading}>
            <div className={styles.loading__inner}>
              <div className={styles.loading__spin}>
                <div className={styles.a1}></div>
                <div className={styles.a2}></div>
              </div>
              <div className={styles.loading__text}>Loading</div>
            </div>
          </div>
        ) : null
      ) : null}
    </>
  );
};
