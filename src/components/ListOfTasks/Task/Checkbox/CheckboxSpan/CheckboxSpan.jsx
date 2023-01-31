import classNames from 'classnames/bind';
import styles from './checkboxSpan.css';
const cx = classNames.bind(styles);

export const CheckboxSpan = ({ onKeyDownCheckbox }) => {
  const className = cx({
    checkboxSpan: true
  });

  return <span className={className} onKeyDown={onKeyDownCheckbox} tabIndex={0} />;
};
