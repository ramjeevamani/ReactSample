import React, { useState } from 'react';

const CrudForm = () => {
  const [items, setItems] = useState([]);
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    description: '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddItem = () => {
    setItems([...items, formData]);
    setFormData({ id: '', name: '', description: '' });
  };

  const handleEditItem = (id) => {
    const selectedItem = items.find((item) => item.id === id);
    setFormData(selectedItem);
  };

  const handleUpdateItem = () => {
    const updatedItems = items.map((item) =>
      item.id === formData.id ? formData : item
    );
    setItems(updatedItems);
    setFormData({ id: '', name: '', description: '' });
  };

  const handleDeleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  return (
    <div>
      <h2>Post Form</h2>
      <form className="mb-3" >
        <label className="mb-3">
          Title:
          <input
            type="text"
            name="id"
            value={formData.id}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="mb-3">
          Sub Title:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label className="mb-3">
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="button" onClick={handleAddItem} style={{margin: "10px"}}>
          Submit
        </button>
        <button type="button" onClick={handleUpdateItem} style={{margin: "10px"}}>
          Update
        </button>
      </form>
<hr />
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - {item.description}
            <br />
            <button type="button" onClick={() => handleEditItem(item.id)} style={{ margin: "10px" }}>
              Edit
            </button>
            
            <button type="button" onClick={() => handleDeleteItem(item.id)} style={{ margin: "10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudForm;
