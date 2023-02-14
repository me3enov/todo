import React from 'react';
import styles from './titleOfContainer.css';

interface IContentProps {
  nameForTitleOfForm: string;
}

export const TitleOfContainer = ({ nameForTitleOfForm }: IContentProps) => {
  return (
    <div className={styles.titleOfContainer}>
      <h3 className={styles.titleOfForm}>{`Do you want to remove "${nameForTitleOfForm}"?`}</h3>
    </div>
  );
};
