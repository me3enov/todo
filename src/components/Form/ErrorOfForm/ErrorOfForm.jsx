import classNames from 'classnames/bind';
import styles from './errorOfForm.css';
const cx = classNames.bind(styles);

export const ErrorOfForm = ({ isDisabledButton, isErrorOfInput }) => {
  const className = cx({
    errorOfForm: true
  });

  return isDisabledButton && isErrorOfInput ? (
    <div className={className}>{isErrorOfInput?.message}</div>
  ) : null;
};
