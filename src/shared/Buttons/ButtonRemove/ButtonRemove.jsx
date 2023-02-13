import React from 'react';
import { ButtonDefault } from '../ButtonDefault';

import classNames from 'classnames/bind';
import styles from './buttonRemove.css';
const cx = classNames.bind(styles);

export const ButtonRemove = ({
  typeForButton,
  labelForButton,
  isDisabledButton,
  textForButton
}) => {
  const styleForButton = cx({
    buttonRemove: true
  });

  return (
    <ButtonDefault
      styleForButton={styleForButton}
      typeForButton={typeForButton}
      labelForButton={labelForButton}
      isDisabledButton={isDisabledButton}
      textForButton={textForButton}
    />
  );
};
