// Profile.js

import React from 'react';
import Photo from 'Photo.js';

export default function Profile() {
  return (
    <div>
      <Photo
        person={{
          name: 'Jonathan Blow',
          description: 'Jonathan Blow, creator of Braid and The Witness',
        }}
        size={200}
      />
    </div>
  );
}
