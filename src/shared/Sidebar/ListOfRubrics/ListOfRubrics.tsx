import React from 'react';
import styles from './listOfRubrics.css';
import { Rubric } from './Rubric';

interface IListOfRubricsProps {
  rubrics: {
    [key: string]: {
      title: {
        text: string;
        color: string;
      };
      items: Array<{
        id: string;
        text: string;
        checked: boolean;
      }>;
    };
  };
}

export const ListOfRubrics = ({ rubrics }: IListOfRubricsProps) => {
  return (
    <ul className={styles.listOfRubrics}>
      {Object.entries(rubrics).map(([rubricId, rubric]) => {
        return <Rubric key={rubricId} rubric={rubric}></Rubric>;
      })}
    </ul>
  );
};
