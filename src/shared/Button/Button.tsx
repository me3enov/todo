import React from 'react';

interface IButtonDefaultProps extends React.ComponentPropsWithoutRef<'button'> {
  specialProp?: string;
}

export const Button = (props: IButtonDefaultProps) => {
  const { children, ...rest } = props;
  return <button {...rest}>{children}</button>;
};
