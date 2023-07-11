import React from 'react';
import './style.css';

import Profile from './Profile.js';

export default function App() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '1.4rem' }}>
      <Profile
        person={{
          name: 'Jonathan Blow',
          description: 'Jonathan Blow, creator of Braid and The Witness',
        }}
        size={{ width: 'auto', height: '200px' }}
      />
      <Profile
        person={{
          name: 'John Carmack',
          description: 'Jonathan Blow, creator of Braid and The Witness',
        }}
        size={{ width: 'auto', height: '200px' }}
      />
      <Profile
        person={{
          name: 'Toru Iwatani',
          description: 'Jonathan Blow, creator of Braid and The Witness',
        }}
        size={{ width: 'auto', height: '200px' }}
      />
    </div>
  );
}
