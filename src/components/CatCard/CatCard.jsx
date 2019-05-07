import React from 'react';
import { Media } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import Counter from './Counter';
import './CatCard.scss';

function CatCard({url, id, history, height}) {
  return (

    <Media className='cardContainer'>
      <Media left href={`/images/${id}`}>
        <Media object data-src={`/images/${id}`}
          alt="Kitten" 
          className="media-object getCalm" 
          src={url} 
          data-holder-rendered="true" 
          style={{height:'35vh'}}
          onClick={() => history.push(`/images/${id}`)}/>
      </Media>
      <Media body>
        <Media heading>
          <p className='mediaPrice'>Price: <em>{height}$</em></p>
        </Media>
        <p>
        Product: {id}
        </p>
        < Counter/>
      </Media>
    </Media>
  );
}

export default withRouter(CatCard);
