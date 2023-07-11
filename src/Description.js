// Description.js

import React from 'react';
import { getPersonBio } from './utilities.js';

export default function Description({ person }) {
  return (
    <div>
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '2rem',
          fontFamily: 'monospace',
          fontStyle: 'italic',
          marginBottom: '1.5rem',
        }}
      >
        {person.name}
      </p>
      <p style={{ textAlign: 'justify' }}>{getPersonBio(person.name)}</p>
    </div>
  );
}
