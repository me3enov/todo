import { Board } from './Board';

import classNames from 'classnames/bind';
import styles from './listOfBoards.css';
const cx = classNames.bind(styles);

export const ListOfBoards = ({ boards }) => {
  const className = cx({
    listOfBoards: true
  });

  return (
    <ul className={className}>
      {Object.entries(boards).map(([boardId, board], index) => {
        return <Board key={boardId} boardId={boardId} board={board}></Board>;
      })}
    </ul>
  );
};
