import React from "react";
import OneUser from "./OneUser";



function Users() {
    const usersArr = [
        {
            name: 'ram',
            role: "developer",
            location: "bangalore"
        },
        {
            name: 'ram11',
            role: "developer1",
            location: "bangalore"
        },
        {
            name: 'ram2',
            role: "developer2",
            location: "bangalore"
        },
        {
            name: 'ram3',
            role: "developer3",
            location: "bangalore"
        }

    ]

    return <div className="row">

        <h1>This is Users Component</h1>
        {
            usersArr.map((user, i) => {
                return <OneUser user={user} />
            })
        }
    </div>
}
export default Users;