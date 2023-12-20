import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSmartphones } from './redux/actions/smartphoneActions';

const SmartphonesList = () => {
    const dispatch = useDispatch();
    const { smartphones, loading, error } = useSelector((state) => state.smartphones);

    useEffect(() => {
        dispatch(fetchSmartphones());
    }, [dispatch]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Smartphones List</h1>
            <ul>
                {smartphones.map((phone) => (
                    <li key={phone.id}>{phone.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default SmartphonesList;