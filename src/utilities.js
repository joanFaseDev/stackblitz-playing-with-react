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
