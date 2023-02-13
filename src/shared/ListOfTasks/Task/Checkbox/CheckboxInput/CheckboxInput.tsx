import React from 'react';

interface ICheckboxInputProps extends React.ComponentPropsWithoutRef<'input'> {
  specialProp?: string;
}

export const CheckboxInput = (props: ICheckboxInputProps) => {
  return <input {...props} />;
};
