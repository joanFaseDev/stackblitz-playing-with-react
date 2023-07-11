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
        size={{ width: '150px', height: '150px' }}
      />
      <Profile
        person={{
          name: 'John Carmack',
          description: 'John Carmack, lead programmer on Doom and Quake',
        }}
        size={{ width: '150px', height: '150px' }}
      />
      <Profile
        person={{
          name: 'Toru Iwatani',
          description: 'Toru Iwatani, creator of Pac-man',
        }}
        size={{ width: '150px', height: '150px' }}
      />
    </div>
  );
}
