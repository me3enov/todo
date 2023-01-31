import { RubricButtonText } from './RubricButtonText';
import classNames from 'classnames/bind';
import styles from './buttonAddTask.css';
const cx = classNames.bind(styles);

export const ButtonAddTask = ({ onOpenPopupAddTask }) => {
  const className = cx({
    buttonAddTask: true
  });

  return (
    <button
      className={className}
      type={'button'}
      aria-label={'Add task'}
      onClick={onOpenPopupAddTask}>
      <RubricButtonText>{'New task'}</RubricButtonText>
    </button>
  );
};
