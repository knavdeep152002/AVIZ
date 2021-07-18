import React, { useState,useEffect  } from "react";
import Graph from "./Graph";
var list = [];
for(var i=0;i<100;i++){
  list.push(Math.floor(Math.random()*500));
}
function App() { 
  const [array,setarray] = useState(list);
  const [elmnt1,setelmnt1] = useState(0);
  const [elmnt2,setelmnt2] = useState(0);
  
  function handleClick(){
    if(elmnt1===array.length-1) return;
    console.log(elmnt1,elmnt2,array[elmnt1],array[elmnt2]);
    if(array[elmnt1]>array[elmnt2]){
      var temp = array[elmnt1];
      array[elmnt1] = array[elmnt2];
      array[elmnt2] = temp;
    }
    if(elmnt2===array.length-1 && elmnt1!==array.length-1){
      setelmnt1(elmnt1+1);
      setelmnt2(elmnt1+1);
    }
    else if(elmnt1!==array.length-1){
      setelmnt2(elmnt2+1);
    }
    setarray(arr => array);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      handleClick()
    }, 1);
    return () => clearInterval(interval);
  });

  const ItemList = array.map((item,index) => <Graph height={String(item)}/>); 
  return (
    <div> 
      {ItemList}       
    </div> 
  );
}

export default App;
