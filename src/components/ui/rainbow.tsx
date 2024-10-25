import React from 'react';

const colors = [
  'text-red-500',
  'text-orange-500',
  'text-yellow-500',
  'text-green-500',
  'text-blue-500',
  'text-indigo-500',
  'text-violet-500',
];

export const Rainbow: React.FC<{ text: string }> = ({ text }) => {
  return (
    <span className="font-bold">
      {text.split('').map((char, index) => (
        <span key={index} className={colors[index % colors.length]}>
          {char}
        </span>
      ))}
    </span>
  );
};
