/* eslint-disable no-eval */
import React,{ useState} from 'react';
import KeyBoardRow from "../KeyBoardRow/KeyBoardRow";
import Button from '@material-ui/core/Button';
import { makeStyles} from '@material-ui/core/styles';
// import ToggleButton from '../ToggleButton/ToggleButton';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { Typography } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    screen: {
        height: "35vh",
    padding: "0 12px",  
    overflow: "hidden",  
//   width: "100%",
  whiteSpace: "no-wrap",
  color:"white",
  backgroundColor: "#0F94F8",
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10
      },
    computationcreen: {
      minHeight:"22vh",
        fontSize: "1rem",
        display: 'flex',
        // justifyContent: "flex-end",
        alignItems: "flex-end",
        position: "fixed",
        width: "18rem",
        flexDirection: "column-reverse",
        color: "#E5E5E6"
      },
    resultscreen: {
        fontSize: "2rem",
        fontWeight: "bold",
        display: 'flex',
        justifyContent: "flex-end",
        alignItems: "flex-end",
        minHeight: "29vh"
      },

    KeyBoardRowScreen: {
        height: "55vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems:"center",
        backgroundColor:"#ffffff",
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
         color: "#0F94F8"
      },
      toggleButton: {
        display: 'flex', 
    justifyContent: "flex-end",
    paddingTop: 10
      },
      toggleButtonOpen:{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        background: "brown",
        width: "100%",
        minHeight: "max-content",
        zIndex: 1,
        top: 35,
        left: 0,
        alignItems: "flex-end"
      },
      historyShow:{
        display: "flex",
        flexDirection: "column",
        position: "absolute",
        width: "100%",
        minHeight: "max-content",
        zIndex: 1,
        top: 0,
        left: 0,
        alignItems: "flex-end"
      },
      TitleHeader:{
        width:"100%",
        alignItems: "center",
        justifyContent: "center",
        display: "flex"
      },
      EqualButton:{
        color:"#0F94F8",
        '& .MuiButton-label':{
          background: "rgb(15, 148, 248)",
          color: "#97D0EF",
          borderRadius: 5,
          padding: 5

        }
      }
  }));

  export default function KeyBoard({prac}) {
    const classes = useStyles();
    const[result,SetResult]=useState("");
    const[output,SetOutput]=useState("");
    const[historyInput,SetHistoryInput]=useState("");
    const[historyOutput,SetHistoryOutput]=useState("");
    // const[historyInputShow,SetHistoryInputShow]=useState("");
    const[historyoutputShow,SetHistoryOutputShow]=useState("");
    const[toggleButton,SetToggleButton]=useState(false);
    const[historyShow,SetHistoryShow]=useState(false);
    const [count, setCount] = useState(0);
    function handleClick(e){
      let equation = result;
      const pressedButton = e.target.value;
  
 if ((pressedButton >= '0' && pressedButton <= '9') || pressedButton === '.' ||  pressedButton === ''){
  SetResult(equation +=pressedButton);
 } 
 else if (['+', '-', '*', '/', '%'].indexOf(pressedButton) !== -1) {
  SetResult( equation += ' ' + pressedButton + ' ');
 }

addToHistory(e);
addToHistoryShow(e);

    }
    function ToggleButton(){
      SetToggleButton(!toggleButton);
          }
    function clear(){
SetResult("");
SetOutput("");
    }

    function calculate(e){
        try{
          // var results = result;
          var equation= historyInput;
          let NumberShow=eval(equation);
          // let decimalNumber=eval(results)
          SetOutput(Number.isInteger(NumberShow)? NumberShow.toLocaleString() : NumberShow.toFixed(3));
          SetHistoryOutput(Number.isInteger(NumberShow)? NumberShow.toLocaleString() : NumberShow.toFixed(3)); 
          SetHistoryOutputShow(Number.isInteger(NumberShow)? NumberShow.toLocaleString() : NumberShow.toFixed(3))
        }
        catch(error){
          SetOutput("Error")
          SetHistoryOutput("Error"); 
          SetHistoryOutputShow("Error")
        }
        addToHistoryShow(e)
    }


    function ArrowClick(){
      const number =result;
     let countvalue=count
if(countvalue%2===0){
  prac = "("
  setCount(count + 1)
}
else{
  prac = ")"
  setCount(count + 1)
}
var results = number;
SetResult(results+=prac);
Arrowhistory()
    }
    function Arrowhistory(){
      const number =result;
      let countvalue=count
if(countvalue % 2 === 0) {
  prac = "("
  setCount(count + 1)
}
else {
  prac = ")"
  setCount(count + 1)
}
var results = number;
 SetHistoryInput(results+=prac);
return prac
    }
    function addToHistory(e) {
      let equation = historyInput;
      const pressedHistory = e.target.value;
      if ((pressedHistory >= '0' && pressedHistory <= '9') || pressedHistory === '.' ||  pressedHistory === ''){
        SetHistoryInput(equation  += pressedHistory);
       } 
       else if (['+', '-', '*', '/', '%',"^"].indexOf(pressedHistory) !== -1) {
        SetHistoryInput( equation += ' ' + pressedHistory + ' '+pressedHistory);
       }
  }
  function addToHistoryShow(e) {
    let equation = historyInput;
    const pressedHistory = e.target.value;
    if ((pressedHistory >= '0' && pressedHistory <= '9') || pressedHistory === '.' ||  pressedHistory === ''){
      SetHistoryInput(equation  += pressedHistory);
     } 
     else if (['+', '-', '*', '/', '%',"^"].indexOf(pressedHistory) !== -1) {
      SetHistoryInput( equation += ' ' + pressedHistory + ' ');
     }
 
}

  function historyClick(){
    SetHistoryShow(!historyShow);
 
  }
  function BackSpaceButton(){
    let equation = result;
    SetResult(equation.slice(0,-1));
    setCount(prevCount => prevCount - 1);
    BackSpaceButtonHistory()
  }
  function BackSpaceButtonHistory(){
    let equation = historyInput;
    SetHistoryInput( equation.substr(0, equation.length - 1));
  }
    return (
      <>

<div  className={classes.screen}>
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
      <div  className={classes.computationcreen}>
      {
                historyShow ?
               
        <div className={classes.historyShow}>
  
  <div  className={classes.computationcreen}>
                   {historyInput}
                      </div>
        </div>

       :null
      }
      </div>
<div  className={classes.computationcreen}>
{result}
      </div>
      <div  className={classes.resultscreen} >
{output}
      </div>
      </div>
        <div  className={classes.KeyBoardRowScreen}>
        <KeyBoardRow>
        <Button   onClick={clear} value="C" style={{color:"#DD774F"}}>C</Button>
        <Button  onClick={BackSpaceButton}  value="^" style={{color:"#0F94F8"}}><KeyboardBackspaceIcon/></Button>
      <Button  onClick={ArrowClick}  value="()" style={{color:"#0F94F8"}}>()</Button>
      <Button   onClick={handleClick} value="%" style={{color:"#0F94F8"}}>%</Button>
      <Button  onClick={handleClick}  value="/" style={{color:"#0F94F8"}}>/</Button>
    </KeyBoardRow>
    <KeyBoardRow>
    <Button onClick={handleClick} value="1">1</Button>
    <Button onClick={handleClick} value="2">2</Button>
    <Button onClick={handleClick} value="3">3</Button>
      <Button  onClick={handleClick}  value="*"style={{color:"#0F94F8"}}>X</Button>
    </KeyBoardRow>
    <KeyBoardRow>
    <Button onClick={handleClick} value="4">4</Button>
      <Button onClick={handleClick} value="5">5</Button>
      <Button onClick={handleClick} value="6">6</Button>
      <Button   onClick={handleClick} value="+" style={{color:"#0F94F8"}}>+</Button>
    </KeyBoardRow>
    <KeyBoardRow>
    <Button onClick={handleClick} value="7"> 7</Button>
      <Button onClick={handleClick} value="8"> 8</Button>
      <Button onClick={handleClick} value="9">9</Button>
      <Button  onClick={handleClick} value="-" style={{color:"#0F94F8"}}>-</Button>
    </KeyBoardRow>
    <KeyBoardRow>
    <Button onClick={handleClick} value=".">.</Button>
      <Button onClick={handleClick} value="0">0</Button>
      <Button onClick={handleClick} value="000">000</Button>
      <Button  onClick={calculate} value="=" className={classes.EqualButton}>=</Button>
    </KeyBoardRow>
      </div>
   
      </>
    );
  }

 