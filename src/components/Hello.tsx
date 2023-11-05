// src/components/Hello.tsx

import React from 'react';

interface HelloProps {
  name: string;
  age?: number; // This is an optional prop
}

const Hello: React.FC<HelloProps> = ({ name, age }) => {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      {age && <p>You are {age} years old.</p>}
    </div>
  );
}

export default Hello;
