import React from 'react';
import styles from './errorOfForm.css';

type ErrorOfForm = {
  isDisabledButton: boolean;
  errorOfInput?: {
    message?: string;
  };
};

export const ErrorOfForm = ({ isDisabledButton, errorOfInput }: ErrorOfForm) => {
  return isDisabledButton && errorOfInput ? (
    <div className={styles.errorOfForm}>{errorOfInput?.message}</div>
  ) : null;
};
