import React from 'react';
// import Button from '@material-ui/core/Button';
// import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
// import Screen from '../Screen/Screen';
import KeyBoard from '../KeyBoard/KeyBoard';
// import { PinDropSharp } from '@material-ui/icons';
// import DarkTheme from '../DarkTheme/DarkTheme';
const useStyles = makeStyles((theme) => ({


  App:{
     display: 'flex',
    alignItems: 'center',
    width:"100%",
    height:"100vh",
    justifyContent:"center",
    // background: "#4B545E",
  },
  calculator: {
    minHeight: "90vh",
    borderRadius: 12,
    boxShadow: "0 30px 60px rgb(0 0 0 / 12%)",
    position: "fixed"
  },
}));

export default function BasicButtonGroup(props) {
  const classes = useStyles();
  return (
<div className={classes.App} >
 <div className={classes.calculator}>
   {/* <Screen result={props.result}/> */}
   <KeyBoard/>
</div> 
</div>
  );
}



