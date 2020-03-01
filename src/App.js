import React from "react";
import MyButton from "./MyButton"
import Photo from "./Photo"
const profile={
  firstName:"Thameur",
  lastName:"Sassi",
  photo:""
}

function App() {
  return (<div>

{

<photo>{profile.photo}</photo> 

<h1>Name:{profile.firstName+" "+ profile.lastName}</h1>


<MyButton
 onSimpleClick={()=>{

window.location="https://www.facebook.com/"

}}>
My Facebook
</MyButton>
<MyButton
onSimpleClick={()=>{

window.location="https://www.linkedin.com/login"

}}>
My LinkedIn

</MyButton>
}
 
  </div>)

}

export default App