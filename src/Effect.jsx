import React, { useEffect, useState } from "react";

function Effect() {
    const [state, setState] = useState(0);
    const [values, setValues] = useState([]);
    const [phones, setPhones] = useState([]);


    useEffect(() => {
        fetch('https://dummyjson.com/products/categories')
            .then(data => { return data.json() })
            .then((values) => {
                console.log(values);
                setValues(values);
            })
        fetch('https://dummyjson.com/products/category/smartphones')
            .then(p => { return p.json() })
            .then((phones) => {
                console.log(phones)
                setPhones(phones.products)
            })

    }, [])


    // useEffect(()=>{
    // console.log("inside the state variable")
    // setState(state)
    // }, [state])

    return (
        <div>
            <h1>This is Effect Page</h1>
            <h1> Count : {state} </h1>
            <button onClick={() => { setState(state + 1) }}> Increase</button>
            <div className="row" >
                {
                    values.map((d, i) => {
                        return <p>{d}</p>
                    })
                }

                {phones.map((phone, i) => {
                    return <> <h2> Name:{phone.title}</h2>
                        <p> {phone.discription}</p>
                        <img style={{ width: "200px", height: '200px' }} src={phone.thumbnail} />

                    </>
                })
                }
            </div>
        </div>
    )
}
export default Effect;