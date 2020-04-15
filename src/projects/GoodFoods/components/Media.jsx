import React from 'react';

const media = [
  { title: 'facebook', image: 'facebook.png' },
  { title: 'twitter', image: 'twitter.png' },
  { title: 'instagram', image: 'instagram.png' }
];

function Media() {
  return (
    <ul className="media">
      {media.map(medium => (
        <li key={medium.title}>
          <img src={require(`../assets/images/media/${medium.image}`)} alt={medium.title} />
        </li>
      ))}
    </ul>
  );
}

export default Media;