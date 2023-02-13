import React from 'react';

interface ICheckboxSpanProps extends React.ComponentPropsWithoutRef<'span'> {
  specialProp?: boolean;
}

export const CheckboxSpan = (props: ICheckboxSpanProps) => {
  return <input {...props} />;
};
