import React,{useEffect,useState} from "react";
function receive(rows,setData)
{   
    React.useEffect(() => {
    fetch('http://65.0.15.182:8081/catalogapi/v1/getDatasets')
      .then(res => res.json())
      .then(rows => setData(rows)
      //.then(console.log(data))
      
      )
  }, [])

 // var myJSON = JSON.stringify(info.data); 
 // const f=myJSON.substring(8);
 
 const task=rows['data'];
    return task;
}