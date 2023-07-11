// Profile.js

import React from 'react';
import Photo from './Photo.js';
import Description from './Description.js';

export default function Profile({ person, size }) {
  return (
    <div
      style={{
        backgroundColor: '#22223b',
        color: '#f2e9e4',
        width: 'min(80%, 800px)',
        padding: ' 2rem 1rem',
        border: '4px solid #f2e9e4',
        borderRadius: '14px',
        margin: '1rem auto',
      }}
    >
      <Photo person={person} size={size} />
      <Description person={person} />
    </div>
  );
}
