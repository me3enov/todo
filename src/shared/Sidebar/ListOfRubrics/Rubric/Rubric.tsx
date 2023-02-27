import React, {useState} from 'react';
import { Button } from '../../../Button';

import classNames from 'classnames/bind';
import styles from './rubric.less';
const cx = classNames.bind(styles);


type Tasks = {
  id: string;
  text: string;
  checked: boolean;
};

interface IRubricProps {
  rubric: {
    title: {
      text: string;
      color: string;
    };
    items: Array<Tasks>;
  };
}

export const Rubric = ({ rubric }: IRubricProps) => {
  const [isShown, setIsShown] = useState<boolean>(true);
  const classNameForMark = cx({
    mark: true,
    [`${rubric.title.color}`]: rubric.title.color
  });

  return (
    <li className={styles.rubric} aria-label={rubric.title.text}>
      <Button className={styles.buttonSelect} type={'button'} aria-label={'Rubric selection'}>
        <div className={classNameForMark}></div>
        <p className={styles.buttonText}>{rubric.title.text}</p>
        {isShown && <span className={styles.buttonUnselect} role={'button'} aria-label={'Remove task'} tabIndex={0}/>}
      </Button>
    </li>
  );
};
