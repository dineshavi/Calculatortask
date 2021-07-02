import React,{useState} from 'react';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { makeStyles} from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    toggleButton: {
        display: 'flex', 
    justifyContent: "flex-end",
    paddingTop: 10
      },

  }));

  export default function ToggleButton({historyInput,historyOutput}) {
    const classes = useStyles();
    const[toggleButton,SetToggleButton]=useState(false);
    const[historyShow,SetHistoryShow]=useState(false);
    function ToggleButton(){
      SetToggleButton(!toggleButton);
          }
          function historyClick(){
            SetHistoryShow(!historyShow);
         
          }
    return (
      <div  className={classes.toggleButton}>
      <div  className={classes.TitleHeader}>
      <Typography>
          Calculator
        </Typography>
      </div>
    
         <MoreVertIcon onClick={ToggleButton}/>
         {
                    toggleButton ?
                    <div className={classes.toggleButtonOpen}>
                    <div onClick={historyClick}>
                   {historyInput}
                    </div>
                    <div>
              {historyOutput}
                    </div>
                    </div>
                        : null
                }
     
          </div>
    
    );
  }
 