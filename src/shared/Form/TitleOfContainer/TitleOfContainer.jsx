import React from 'react';
import styles from './titleOfContainer.css';
import { TitleOfForm } from './TitleOfForm';

export const TitleOfContainer = ({ nameForTitleOfForm }) => {
  return (
    <div className={styles.titleOfContainer}>
      <TitleOfForm nameForTitleOfForm={nameForTitleOfForm} />
    </div>
  );
};
