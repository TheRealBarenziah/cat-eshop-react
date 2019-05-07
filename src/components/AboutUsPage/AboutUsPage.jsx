import React from 'react';
import { withRouter } from 'react-router-dom';

function AboutUsPage() {
  return (
    <div className="my-container-margin-top">
      <p>This is about me.</p>
    </div>
  );
}

export default withRouter(AboutUsPage);