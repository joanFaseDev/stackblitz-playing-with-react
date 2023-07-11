// Photo.js

import React from 'react';
import { getImageUrl } from './utilities.js';

export default function Photo({ person, size }) {
  return (
    <img
      className="photo"
      src={getImageUrl(person.name)}
      alt={person.description}
      width={size.width}
      height={size.height}
    />
  );
}

// https://www.famousbirthdays.com/faces/blow-jonathan-image.jpg
