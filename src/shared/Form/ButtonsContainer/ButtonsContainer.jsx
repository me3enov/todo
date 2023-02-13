import React from 'react';
import styles from './buttonsContainer.css';

export const ButtonsContainer = ({ children }) => {
  return <div className={styles.buttonsContainer}>{children}</div>;
};
