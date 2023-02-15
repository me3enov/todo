import React from 'react';
import styles from './sidebar.css';
import {ListOfRubrics} from "./ListOfRubrics";
import {Button} from "../Button";

interface ISidebarProps {
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


export function Sidebar( {rubrics}: ISidebarProps ) {
  return (
    <div className={styles.sidebar}>
      <h3 className={styles.sidebarTitle}>{'All tasks'}</h3>
      <ListOfRubrics rubrics={rubrics} />
      <Button
          className={styles.buttonAddFolder}
          type={'button'}
          aria-label={'Add task'}>
          <p className={styles.buttonText}>{'New task'}</p>
      </Button>
    </div>
  );
}
