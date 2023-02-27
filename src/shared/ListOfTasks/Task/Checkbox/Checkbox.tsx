import React from 'react';
import classNames from 'classnames/bind';
import styles from './checkbox.less';
const cx = classNames.bind(styles);
import { CheckboxInput } from './CheckboxInput';
import { CheckboxSpan } from './CheckboxSpan';

type Checkbox = {
  labelForCheckbox: string;
  isChecked: boolean;
  onChangeCheckbox: () => void;
  onKeyDownCheckbox: any; // ?? что за тип
  onFocus: () => void;
};

export const Checkbox = ({
  labelForCheckbox,
  isChecked,
  onChangeCheckbox,
  onKeyDownCheckbox,
  onFocus
}: Checkbox) => {
  const classForSpan = cx({
    checkboxSpan: true,
    checkboxSpan_checked: isChecked
  });

  return (
    <label aria-label={labelForCheckbox} className={styles.checkbox}>
      <CheckboxInput
        className={styles.checkboxInput}
        checked={isChecked}
        onChange={onChangeCheckbox}
        tabIndex={-1}
        type={'checkbox'}
      />
      <CheckboxSpan
        className={classForSpan}
        onKeyDown={onKeyDownCheckbox}
        onFocus={onFocus}
        tabIndex={0}
      />
    </label>
  );
};
