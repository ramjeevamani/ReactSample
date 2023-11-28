import React from "react";

function OneUser(props){
    const {user} = props
    return(
<div className="card m-2 col-sm">
                    <div className="card-body">
                    <h3 className="card-title">Name : {user.name}</h3>
                    <h3>role : {user.role}</h3>
                    <h3>Location : {user.location}</h3>
                    </div>
                </div>
    )
}

export default OneUser;