import { forwardRef } from 'react';
import { clsx } from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary';
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(
          'rounded-full px-4 py-2 text-sm font-semibold text-white transition-all duration-300 ease-in-out',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-custom-purple-900',
          {
            'bg-custom-purple-600 hover:bg-custom-purple-500 focus:ring-custom-purple-500':
              variant === 'primary',
            'bg-transparent border border-custom-purple-300 hover:bg-custom-purple-700 focus:ring-custom-purple-300':
              variant === 'secondary',
          },
          className
        )}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';

export default Button;
