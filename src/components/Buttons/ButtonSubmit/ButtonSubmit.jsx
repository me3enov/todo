import { ButtonDefault } from '../ButtonDefault';

import classNames from 'classnames/bind';
import styles from './buttonSubmit.css';
const cx = classNames.bind(styles);

export const ButtonSubmit = ({
  isTypeForButton,
  isLabelForButton,
  isDisabledButton,
  isTextForButton
}) => {
  const isStyleForButton = cx({
    buttonSubmit: true
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
