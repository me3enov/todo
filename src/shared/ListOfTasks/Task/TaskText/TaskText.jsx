import React from 'react';
import styles from './taskText.css';

export const TaskText = ({ nameOfTask }) => {
  return <p className={styles.taskText}>{nameOfTask}</p>;
};
