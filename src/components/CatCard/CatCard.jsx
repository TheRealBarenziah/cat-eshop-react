import React from 'react';
import { withRouter } from 'react-router-dom';

function CatCard({url}) {
  return (
    <div>
      <img src={url} alt='' height='300px' onClick={() => window.location.replace(url)} />
      <p>Hello, I'm the cat.</p>
    </div>
  );
}

export default withRouter(CatCard);
