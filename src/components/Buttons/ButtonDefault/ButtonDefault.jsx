import classNames from 'classnames/bind';
import styles from './buttonDefault.css';
const cx = classNames.bind(styles);

//TODO: isTypeForButton по названию подразумевает boolean значение, но на деле строчка. Аналогично с isLabelForButton
export const ButtonDefault = ({
  isStyleForButton,
  isTypeForButton,
  isLabelForButton,
  isDisabledButton,
  onClickOnButton,
  isTextForButton
}) => {
  const className = cx(
    {
      buttonDefault: true
    },
    isStyleForButton
  );

  return (
    <button
      className={className}
      type={isTypeForButton}
      aria-label={isLabelForButton}
      disabled={isDisabledButton}
      onClick={onClickOnButton}>
      {isTextForButton}
    </button>
  );
};