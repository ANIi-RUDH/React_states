import React, { useState } from "react";

function App() {
 const [fullName, setFullName]=useState({
  fName:"",
  lName:""
 })
 
 function Changes(event){
  console.log(event.target)
  
  console.log(event.target.value)
  console.log(event.target.name)
  
  const {name,value}=event.target
  
  setFullName((oldOnes)=>{
    console.log(oldOnes)
    if (name==='fName'){
      return {
      fName:value,
      lName:oldOnes.lName}
    }
    if (name==='lName'){
      return{
        fName:oldOnes.fName,
        lName:value
      }
    }
  })
  
 }
  return (
    <div className="container">
      <h1>
        Hello
         {fullName.fName} {fullName.lName} 
      </h1>
      <form>
        <input onChange={Changes} type="text"  name="fName" 
        value={fullName.fName}
        placeholder="First Name"/>
        <input onChange={Changes} type="text" name="lName"
          value={fullName.lName}
           placeholder="Last Name"   />
        <button>Submit</button>
      
      </form>
    </div>
  );
 }



export default App;
