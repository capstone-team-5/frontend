import React from 'react';

interface StyledButtonProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  className?: string; // probably shouldnt' be optional here
}

const StyledButton: React.FC<StyledButtonProps> = ({ onClick, children, ...props }) => {
  const defaultClassName = "inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 mr-8";
  const className = `${defaultClassName} ${props.className || ''}`;

  return (
    <button className={className} onClick={onClick} {...props}>
      {children}
    </button>
  );
};

export default StyledButton;
