import { forwardRef } from 'react';

interface ButtonOptions {}

type Ref = HTMLButtonElement;

export type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> &
  ButtonOptions;

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const { type, children, ...rest } = props;
  return (
    <button type={type} ref={ref} className="button-primary" {...rest}>
      {children}
    </button>
  );
});

Button.displayName = 'Button';
export default Button;

// export default function Button() {
//   return (
//     <button className="bg-primary-500 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded">Conponent</button>
//   );
// }
