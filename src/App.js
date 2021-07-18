import React, { useState } from "react";
import Graph from "./Graph";
var list = [];
for(var i=0;i<10;i++){
  list.push(Math.floor(Math.random()*500));
}
function App() { 
  const [array,setarray] = useState(list);
  const [elmnt1,setelmnt1] = useState(0);
  const [elmnt2,setelmnt2] = useState(0);
  
  if(elmnt1!==array.length-1){
    // setInterval(handleClick(elmnt1,elmnt2), 100);
  }
  function handleClick(elmnt1,elmnt2){
    console.log(elmnt1,elmnt2,array[elmnt1],array[elmnt2]);
    if(array[elmnt1]>array[elmnt2]){
      var temp = array[elmnt1];
      array[elmnt1] = array[elmnt2];
      array[elmnt2] = temp;
    }
    if(elmnt2===array.length-1){
      setelmnt1(elmnt1+1);
      setelmnt2(elmnt1+1);
    }
    else{
      setelmnt2(elmnt2+1);
    }
    setarray(arr => array);
  }

  
  const ItemList = array.map((item,index) => <Graph height={String(item)}/>); 
  return (
    <div> 
      {ItemList} 
      <button onClick={() => { handleClick(elmnt1,elmnt2)}}>Next</button>  
      
    </div> 
  );
}

export default App;
