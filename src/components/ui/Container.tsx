import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
  className?: string;
  marginLeft?: string;
  marginRight?: string;
}

const Container = ({ children, className = '', marginLeft = '120px', marginRight = '120px' }: ContainerProps) => {
  return (
    <div
      className={`${className}`}
      style={{ marginLeft, marginRight }}
    >
      {children}
    </div>
  );
};

export default Container;