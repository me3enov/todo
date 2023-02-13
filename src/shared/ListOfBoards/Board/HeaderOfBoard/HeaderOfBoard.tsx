import React from 'react';
import styles from './headerOfBoard.css';
import { HeaderText } from './HeaderText';
import { HeaderLine } from './HeaderLine';

type Header = {
  color: string;
  text: string;
};

export const HeaderOfBoard = ({ color, text }: Header) => {
  return (
    <div className={styles.headerOfBoard}>
      <HeaderText color={color} text={text} />
      <HeaderLine />
    </div>
  );
};
