// Description.js

import React from 'react';
import { getPersonBio } from './utilities.js';

export default function Description({ person }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1rem' }}>
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '2rem',
          fontFamily: 'monospace',
          fontStyle: 'italic',
        }}
      >
        {person.name}
      </p>
      <p style={{ textAlign: 'justify' }}>{getPersonBio(person.name)}</p>
    </div>
  );
}
