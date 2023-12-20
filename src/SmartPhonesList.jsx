import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSmartphones } from './redux/actions/smartphoneActions';

const SmartphonesList = () => {
    const [state, setState] = useState(20);
    const dispatch = useDispatch();
    const { smartphones, error } = useSelector((state) => state.smartphones);
    console.log(smartphones, "Keyyyyyyyyyyyyyyy")

    useEffect(() => {
        dispatch(fetchSmartphones());
    }, [dispatch]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Smartphones List</h1>
            <h1> Count : {state} </h1>
            <button onClick={() => { setState(state + 10) }}> Increase</button>
            <ul>
                {smartphones.map((phone) => (
                    <div>
                       
                        <h3>name : {phone.title}</h3>
                        <p>description : {phone.description}</p>
                        <button onClick={()=>{alert("image btn clicked")}}>
                        <img style={{ width: '150px', height: '150px' }} src={phone.thumbnail} />
                        </button>
                    </div>
                ))}
            </ul>
        </div>
    );
};

export default SmartphonesList;