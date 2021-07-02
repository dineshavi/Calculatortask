import React from 'react';

import { makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    keypad__row: {
        height: "16vh",
        display: 'flex', 
      },

  }));

  export default function KeyBoardRow(props) {
    const classes = useStyles();
    return (
        <div  className={classes.keypad__row}>
      {props.children}

      </div>
    );
  }
 