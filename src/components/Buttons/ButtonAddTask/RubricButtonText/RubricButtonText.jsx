import classNames from 'classnames/bind';
import styles from './rubricButtonText.css';
const cx = classNames.bind(styles);

export const RubricButtonText = () => {
  const className = cx({
    rubricButtonText: true
  });

  return <p className={className}>New task</p>;
};
