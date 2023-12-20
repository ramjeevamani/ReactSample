import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem } from './redux/actions/counterActions';
import Grid from '@mui/material/Grid';
import { Box } from '@mui/material';

const Posts = () => {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        address: ""
    })

    const handleSubmit = () => {
        console.log(formData)
        dispatch(addItem(formData))
    }
    const handleDelete = (index) => {
        console.log("Deleting post at index:", index);
        dispatch(deleteItem(index));
    }

    const handleChange = (e) => {

        setFormData({ ...formData, [e.target.name]: e.target.value })

    }
    const dispatch = useDispatch();
    const { postdata } = useSelector((state) => state.post)

    return (
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <h2>Post Form</h2>
                <div>
                    <label>First Name : </label>
                    <input name="firstName" value={formData.firstName} onChange={handleChange} style={{ marginTop: "20px" }} />
                </div>
                <div>
                    <label>last Name : </label>
                    <input name="lastName" value={formData.lastName} onChange={handleChange}  style={{ marginTop: "20px" }}/>
                </div>
                <div>
                    <label>Address : </label>
                    <input name="address" value={formData.address} onChange={handleChange} style={{ marginTop: "20px" }} />
                </div>
                <button onClick={handleSubmit}>Submit</button>
            </Grid>
            <Grid item xs={6}>
                {
                    postdata.map((item, i) => {
                        return <Box style={{ marginTop: "20px" }}>
                            <h3>name : {item.firstName + " " + item.lastName}</h3>
                            <h2>Address: {item.address}</h2>
                            <button onClick={() => handleDelete(i)}>Delete</button>
                        </Box>
                    })
                }
            </Grid>
        </Grid>
    );
};

export default Posts;


