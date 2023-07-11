//utilities.js

export function getImageUrl(person) {
  return {
    'Jonathan Blow':
      'https://assetsio.reedpopcdn.com/jonblow.png?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp',
    'John Carmack':
      'https://kids.kiddle.co/images/thumb/4/4e/John_Carmack_at_GDCA_2017_--_1_March_2017_%28cropped%29.jpeg/300px-John_Carmack_at_GDCA_2017_--_1_March_2017_%28cropped%29.jpeg',
    'Toru Iwatani':
      'https://anniversaire-celebrite.com/upload/250x333/toru-iwatani-250.jpg',
  }[person];
}

export function getPersonBio(person) {
  return {
    'Jonathan Blow':
      'Jonathan Blow (born 1971) is an American video game designer and programmer. He is best known for his work on the independent video games Braid (2008) and The Witness (2016).',
    'John Carmack':
      "John D. Carmack II[1] (born August 20, 1970)[1] is an American computer programmer and video game developer. He co-founded the video game company id Software and was the lead programmer of its 1990s games Commander Keen, Wolfenstein 3D, Doom, Quake, and their sequels. Carmack made innovations in 3D computer graphics, such as his Carmack's Reverse algorithm for shadow volumes. In 2013, he resigned from id Software to work full-time at Oculus VR as their CTO. In 2019, he reduced his role to Consulting CTO so he could allocate more time toward artificial general intelligence (AGI).[3] In 2022, he left Oculus to work on his startup, Keen Technologies.[4] ",
    'Toru Iwatani':
      'Toru Iwatani (岩谷 徹, Iwatani Tōru, born January 25, 1955) is a Japanese video game designer who spent much of his career working for Namco. He is best known as the creator of the arcade game Pac-Man (1980). ',
  }[person];
}
