import { forwardRef } from 'react';
import { clsx } from 'clsx';

type CardProps = React.HTMLAttributes<HTMLDivElement>;

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={clsx(
          'rounded-xl bg-custom-purple-700/50 p-6 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out',
          'hover:scale-105 hover:bg-custom-purple-700',
          className
        )}
        {...props}
      />
    );
  }
);

Card.displayName = 'Card';

export default Card;
