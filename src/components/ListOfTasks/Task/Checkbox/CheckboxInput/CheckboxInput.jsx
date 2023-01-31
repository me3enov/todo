import classNames from 'classnames/bind';
import styles from './checkboxInput.css';
const cx = classNames.bind(styles);

export const CheckboxInput = ({ isChecked, onChangeCheckbox, onKeyDownOnCheckboxSpan }) => {
  const className = cx({
    checkboxInput: true
  });

  return (
    <input
      className={className}
      type={'checkbox'}
      checked={isChecked}
      onChange={onChangeCheckbox}
      onKeyDown={onKeyDownOnCheckboxSpan}
      tabIndex={-1}
    />
  );
};
