import classNames from 'classnames/bind';
import styles from './headerText.css';
const cx = classNames.bind(styles);

export const HeaderText = ({ color, isTitleForHeader }) => {
  const className = cx({
    headerText: true,
    [`${color}`]: color
  });

  return <h2 className={className}>{isTitleForHeader}</h2>;
};
