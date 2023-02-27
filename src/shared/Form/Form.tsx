import React from 'react';
import styles from "./form.less";

interface IFormProps extends React.ComponentPropsWithoutRef<'form'> {
  specialProp?: string;
}

export const Form = (props: IFormProps) => {
  const { children, ...rest } = props;
  return (
    <form {...rest}>
      <fieldset className={styles.fieldset}>{children}</fieldset>
    </form>
  );
};
