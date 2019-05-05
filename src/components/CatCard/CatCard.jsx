import React from 'react';
import { Media } from 'reactstrap';
import { withRouter } from 'react-router-dom';

function CatCard({url, id, history}) {
  return (

    <Media>
      <Media left href={`/images/${id}`}>
        <Media object data-src={`/images/${id}`}
          alt="Kitten" 
          className="media-object getCalm" 
          src={url} 
          data-holder-rendered="true" 
          style={{height:'200px'}}
          onClick={() => history.push(`/images/${id}`)}/>
      </Media>
      <Media body>
        <Media heading>
          {id}
        </Media>
        <p>Stats here</p>
      </Media>
    </Media>
  );
}

export default withRouter(CatCard);
