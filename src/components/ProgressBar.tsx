import classNames from 'classnames';
import { ReactNode } from 'react';

export interface ProgressBarProps extends React.ComponentPropsWithoutRef<'div'> {
  label: ReactNode;
  value: number;
  total: number;
}

export default function ProgressBar({ className, label, value, total, ...rest }: ProgressBarProps) {
  return (
    <div className={classNames(className, 'mb-1 flex')} {...rest}>
      <p className="mr-2 w-4 text-lg text-right font-bold">{label}</p>
      <div className="flex-1">
        <div
          className={classNames(
            'min-w-fit h-full flex justify-end items-center px-3 font-bold',
            value ? 'bg-green-200' : 'bg-gray-200',
          )}
          style={{ width: `${(100 * value) / total}%` }}
        >
          {value}
        </div>
      </div>
    </div>
  );
}
