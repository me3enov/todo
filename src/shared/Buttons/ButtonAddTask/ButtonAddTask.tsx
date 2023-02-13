import React from 'react';
import styles from './buttonAddTask.css';

interface IButtonAddTaskProps {
  onOpenPopupAddTask: () => void;
}

export const ButtonAddTask = ({ onOpenPopupAddTask }: IButtonAddTaskProps) => {
  return (
    <button
      className={styles.buttonAddTask}
      type={'button'}
      aria-label={'Add task'}
      onClick={onOpenPopupAddTask}
    >
      <p className={styles.rubricButtonText}>New task</p>
    </button>
  );
};
