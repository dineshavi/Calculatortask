import React from 'react';

import { makeStyles} from '@material-ui/core/styles';
// import ResultScreen from '../ResultScreen/ResultScreen';
// import InputScreen from '../InputScreen/InputScreen';
import ToggleButton from '../ToggleButton/ToggleButton';
const useStyles = makeStyles((theme) => ({
    screen: {
        height: "35vh",
    padding: "0 2rem",  
    overflow: "hidden",  
//   width: "100%",
  whiteSpace: "no-wrap",
  color:"white",
  backgroundColor: "#0F94F8",
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10
      },
      resultscreen: {
        fontSize: "2rem",
        fontWeight: "bold",
        display: 'flex',
        justifyContent: "flex-end",
        alignItems: "flex-end"
      },
      computationcreen: {
        height: "22vh",
        fontSize: "1rem",
        display: 'flex',
        justifyContent: "flex-end",
        alignItems: "flex-end",
      }
  }));

  export default function Screen(props) {
    const classes = useStyles();
    return (
        <div  className={classes.screen}>

          <ToggleButton/>

           <div  className={classes.computationcreen}>
{props.children}  
      </div>
      <div  className={classes.resultscreen}>
      {props.children}  
      </div>


 

      </div>
    );
  }