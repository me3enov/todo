import { ButtonDefault } from '../ButtonDefault';

import classNames from 'classnames/bind';
import styles from './buttonRemove.css';
const cx = classNames.bind(styles);

export const ButtonRemove = ({
  isTypeForButton,
  isLabelForButton,
  isDisabledButton,
  isTextForButton
}) => {
  const isStyleForButton = cx({
    buttonRemove: true
  });

  return (
    <ButtonDefault
      isStyleForButton={isStyleForButton}
      isTypeForButton={isTypeForButton}
      isLabelForButton={isLabelForButton}
      isDisabledButton={isDisabledButton}
      isTextForButton={isTextForButton}
    />
  );
};
