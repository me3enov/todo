import { CheckboxInput } from './CheckboxInput';
import { CheckboxSpan } from './CheckboxSpan';

import classNames from 'classnames/bind';
import styles from './checkbox.css';
const cx = classNames.bind(styles);

export const Checkbox = ({
  isLabelForCheckbox,
  isChecked,
  onChangeCheckbox,
  onKeyDownCheckbox
}) => {
  const className = cx({
    checkbox: true
  });

  return (
    <label aria-label={isLabelForCheckbox} className={className}>
      <CheckboxInput isChecked={isChecked} onChangeCheckbox={onChangeCheckbox} />
      <CheckboxSpan onKeyDownCheckbox={onKeyDownCheckbox} />
    </label>
  );
};
