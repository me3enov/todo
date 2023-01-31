import { Board } from './Board';

import classNames from 'classnames/bind';
import styles from './listOfBoards.css';
const cx = classNames.bind(styles);

export const ListOfBoards = ({ itemsForContent }) => {
  const className = cx({
    listOfBoards: true
  });

  return (
    <ul className={className}>
      {Object.entries(itemsForContent).map(([boardId, board]) => {
        return <Board key={boardId} board={board}></Board>;
      })}
    </ul>
  );
};
