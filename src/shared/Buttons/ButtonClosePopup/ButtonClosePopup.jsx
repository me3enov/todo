import React from 'react';
import styles from './buttonClosePopup.css';

export const ButtonClosePopup = ({ onClosePopup }) => {
  return (
    <button
      type={'button'}
      tabIndex={0}
      className={styles.buttonClosePopup}
      onClick={onClosePopup}
      aria-label={'Close popup'}
    />
  );
};
