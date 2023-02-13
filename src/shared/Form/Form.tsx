import React from 'react';
import { FieldsetOfForm } from './FieldsetOfForm';

interface IFormProps extends React.ComponentPropsWithoutRef<'form'> {
  specialProp?: string;
}

export const Form = (props: IFormProps) => {
  const { children, ...rest } = props;
  return (
    <form {...rest}> <FieldsetOfForm> {children} </FieldsetOfForm> </form>
  );
};
