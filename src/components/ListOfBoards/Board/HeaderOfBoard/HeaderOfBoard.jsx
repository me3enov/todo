import { HeaderText } from './HeaderText';
import { HeaderLine } from './HeaderLine';

import classNames from 'classnames/bind';
import styles from './headerOfBoard.css';
const cx = classNames.bind(styles);

export const HeaderOfBoard = ({ color, isTitleForHeader }) => {
  const className = cx({
    headerOfBoard: true
  });

  return (
    <div className={className}>
      <HeaderText color={color} isTitleForHeader={isTitleForHeader} />
      <HeaderLine />
    </div>
  );
};
