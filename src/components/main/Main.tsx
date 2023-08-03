import React from 'react';
import MediaList from '../pages/MediaList';

const Main = () => {
  return (
    <main id="main">
      <div className="wrap">
        <div className="container">
          <MediaList></MediaList>
        </div>
      </div>
    </main>
  );
};

export default Main;