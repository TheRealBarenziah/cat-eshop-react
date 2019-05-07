import React from 'react';
import { Button } from 'reactstrap';

export default function mySexyButton (props) {
  return (
    <Button 
      className={props.className}
      onClick={() =>
        props.sign === '+' ? props.updateCount(1) : props.updateCount(-1)} >
      {props.sign}
    </Button>

  );
}

