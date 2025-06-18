import React ,{useState} from 'react';
function Name({name,loc}){
   const  [Message, setMessage]=useState(" ")
    const  handleclick=()=>{
        setMessage("button is clicked");
      }

    return (

    <div>
         <h2> my name is {name}</h2>
         <h2>iam from {loc}</h2>
         <button onClick={handleclick}>submit</button>
         <h2>{Message}</h2>
    </div>
    )
}
export default Name;