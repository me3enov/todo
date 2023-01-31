import { ListOfBoards } from '../ListOfBoards';

import classNames from 'classnames/bind';
import styles from './content.css';
const cx = classNames.bind(styles);

export const Content = ({ itemsForContent }) => {
  const className = cx({
    content: true
  });

  return (
    <main className={className}>
      <ListOfBoards itemsForContent={itemsForContent} />
    </main>
  );
};
