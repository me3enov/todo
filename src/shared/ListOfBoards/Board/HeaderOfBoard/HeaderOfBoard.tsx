import React from 'react';
import classNames from 'classnames/bind';
import styles from './headerOfBoard.css';
const cx = classNames.bind(styles);

type Header = {
  color: string;
  text: string;
};

export const HeaderOfBoard = ({ color, text }: Header) => {
  const className = cx({
    headerText: true,
    [`${color}`]: color
  });

  return (
    <div className={styles.headerOfBoard}>
      <h2 className={className}>{text}</h2>
      <div className={styles.headerLine} />
    </div>
  );
};
