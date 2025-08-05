import React , {useEffect} from "react";

const Navbar=({color})=>{
      //case 1:run on every render
  useEffect(() => {
    alert("hey welcome to my home page")
  })
  // case 2: run only on first render
  useEffect(() => {
    alert("hey i am running because color was changed")
  }, [])
  //case3: run only when certain values change
  useEffect(() => {
    alert("hey i am running because color was changed")
  }, [color])
  
  //example of Cleanup function

  useEffect(() => {
    alert("Hey welcome to my page. This is the first render of app.jsx")
    return()=>{
        alert("component was unmounted")
    }
  }, [])
  
    return(
        <div>
            I am navbar of {color} color hehe..
        </div>
    )
}

export default Navbar