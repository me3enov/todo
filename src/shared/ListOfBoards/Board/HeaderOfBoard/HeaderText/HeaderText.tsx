import React from 'react';
import classNames from 'classnames/bind';
import styles from './headerText.css';
const cx = classNames.bind(styles);

type Header = {
  color: string;
  text: string;
};

export const HeaderText = ({ color, text }: Header) => {
  const className = cx({
    headerText: true,
    [`${color}`]: color
  });

  return <h2 className={className}>{text}</h2>;
};
