import classNames from 'classnames/bind';
import styles from './buttonRemoveTask.css';
const cx = classNames.bind(styles);

export const ButtonRemoveTask = ({ onOpenPopup }) => {
  const className = cx({
    buttonRemoveTask: true
  });

  return (
    <button
      className={className}
      type={'button'}
      aria-label={'Remove task'}
      onClick={onOpenPopup}
    />
  );
};
