import classNames from 'classnames/bind';
import styles from './buttonsContainer.css';
const cx = classNames.bind(styles);

export const ButtonsContainer = ({ children }) => {
  const className = cx({
    buttonsContainer: true
  });

  return <div className={className}>{children}</div>;
};
