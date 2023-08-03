import React from 'react';

const Loading = () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        left: '0',
        right: '0',
        top: '80px',
        bottom: '200px',
      }}
    >
      <Loader />
    </div>
  );
};

function Loader() {
  return (
    <div className="spinner1212">
      <div className="rect1"></div>
      <div className="rect2"></div>
      <div className="rect3"></div>
      <div className="rect4"></div>
      <div className="rect5"></div>
    </div>
  );
}

export default Loading;
