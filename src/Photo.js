// Photo.js

import React from 'react';
import { getImageUrl } from './utilities.js';

export default function Photo({ person, size }) {
  return (
    <img
      className="photo"
      src={getImageUrl(person.name)}
      alt={person.description}
      style={{
        borderRadius: '50%',
        objectFit: 'fill',
        width: size.width,
        height: size.height,
        float: 'left',
        margin: '.5rem 1rem',
      }}
    />
  );
}
