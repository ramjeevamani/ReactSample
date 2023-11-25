import React from "react";


function Component(props) {
    const {user} = props
    return <>
  <h1>Hello </h1>
  <h1>Welcome to React Sample Application</h1>
  <h3>Name : {user.name}</h3>
  <h3>role : {user.role}</h3>
  <h3>mail : {user.mail}</h3>
  </>
}

export default Component;