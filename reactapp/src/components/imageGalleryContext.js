import React from 'react';

const Images = React.createContext({
  firstImage: 'https://picsum.photos/200/300?random=1',
  secondImage: 'https://picsum.photos/200/300?random=2',
  thirdImage: 'https://picsum.photos/200/300?random=3'
});

export default Images;