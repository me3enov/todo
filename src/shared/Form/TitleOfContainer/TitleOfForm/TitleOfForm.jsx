import React from 'react';
import styles from './titleOfForm.css';

export const TitleOfForm = ({ nameForTitleOfForm }) => {
  return <h3 className={styles.titleOfForm}>{`Do you want to remove "${nameForTitleOfForm}"?`}</h3>;
};
