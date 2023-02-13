import React from 'react';
import styles from './fieldsetOfForm.css';

export const FieldsetOfForm = ({ children }) => {
  return <fieldset className={styles.fieldset}>{children}</fieldset>;
};
