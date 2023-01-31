import classNames from 'classnames/bind';
import styles from './taskText.css';
const cx = classNames.bind(styles);

export const TaskText = ({ isNameOfTask }) => {
  const className = cx({
    taskText: true
  });

  return <p className={className}>{isNameOfTask}</p>;
};
