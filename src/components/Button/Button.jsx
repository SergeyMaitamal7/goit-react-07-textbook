import { nanoid } from 'nanoid';

export const Button = ({ selected = false, type, children, ...otherProps }) => {
  return (
    <button key={nanoid()} type={type} {...otherProps}>
      {children}
    </button>
  );
};
