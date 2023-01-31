import classNames from 'classnames/bind';
import styles from './buttonClosePopup.css';
const cx = classNames.bind(styles);

export const ButtonClosePopup = ({ onClosePopup }) => {
  const className = cx({
    buttonClosePopup: true
  });

  return (
    <button
      type={'button'}
      tabIndex={0}
      className={className}
      onClick={onClosePopup}
      aria-label={'Close popup'}
    />
  );
};
