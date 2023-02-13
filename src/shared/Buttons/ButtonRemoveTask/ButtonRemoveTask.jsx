import React from 'react';
import styles from './buttonRemoveTask.css';

export const ButtonRemoveTask = ({ onOpenPopup, onBlur }) => {
  return (
    <button
      className={styles.buttonRemoveTask}
      type={'button'}
      aria-label={'Remove task'}
      onBlur={onBlur}
      onClick={onOpenPopup}
    />
  );
};
