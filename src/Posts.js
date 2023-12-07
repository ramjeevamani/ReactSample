import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, updateItem, deleteItem } from './redux/actions/counterActions';

const Posts = () => {
    const postdata = useSelector((state) => state.postdata)
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        description: '',
    });

    return (
        <div>
            <h2>Post Form</h2>
            <form  >
                <label className="mb-3" >
                    Title:
                    <input
                        type="text"
                    />
                </label>
                <br />
                <label className="mb-3" >
                    Sub Title:
                    <input
                        type="text"
                    />
                </label>
                <br />
                <label className="mb-3">
                    Description:
                    <input
                        type="text"
                    />
                </label>
                <br />
                <button type="button" onClick={() => { dispatch(addItem()) }} style={{ margin: "10px" }}>
                    Submit
                </button>
                <button type="button" onClick={() => { dispatch(updateItem()) }} style={{ margin: "10px" }}>
                    Update
                </button>
            </form>

            {/* <ul>
                {postdata.map((item) => (
                    // <li key={item.id}>
                    //   {item.name} - {item.description}

                    <button type="button" onClick={() => { dispatch(deleteItem()) }} style={{ margin: "10px" }}>
                        Delete
                    </button>

                    // </li>
                ))}
            </ul> */}
            <h2>Post Form Data : {postdata + <br />}</h2>
        </div>
    );
};

export default Posts;


