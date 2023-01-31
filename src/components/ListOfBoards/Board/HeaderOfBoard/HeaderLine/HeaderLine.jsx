import classNames from 'classnames/bind';
import styles from './headerLine.css';
const cx = classNames.bind(styles);

export const HeaderLine = () => {
  const className = cx({
    headerLine: true
  });

  return <div className={className} />;
};
