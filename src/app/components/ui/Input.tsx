import { forwardRef } from 'react';
import { clsx } from 'clsx';

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={clsx(
          'w-full rounded-md border border-custom-purple-300 bg-transparent px-4 py-2 text-white placeholder-gray-400',
          'focus:border-custom-purple-500 focus:outline-none focus:ring-1 focus:ring-custom-purple-500',
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export default Input;
