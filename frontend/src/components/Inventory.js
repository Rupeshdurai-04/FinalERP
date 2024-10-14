import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker'; 
import 'react-datepicker/dist/react-datepicker.css'; 
import './Inventory.css'; 

const Inventory = () => {
  const [showForm, setShowForm] = useState(false); 
  const [inventory, setInventory] = useState([]);

  const [newStock, setNewStock] = useState({
    date: new Date(), 
    description: '',
    type: '',
    quantity: '',
    stockOnHand: '',
    cost: '',
  });

  
  useEffect(() => {
    const fetchInventory = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/inventory');
        const data = await response.json();
        setInventory(data);
      } catch (error) {
        console.error('Error fetching inventory:', error);
      }
    };
    fetchInventory();
  }, []);

  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStock((prev) => ({ ...prev, [name]: value }));
  };

  
  const handleDateChange = (date) => {
    setNewStock((prev) => ({ ...prev, date }));
  };

  
  const handleAddStock = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/inventory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newStock),
      });

      if (response.ok) {
        const addedStock = await response.json();
        setInventory((prev) => [...prev, addedStock]); 
        setShowForm(false); 
      } else {
        console.error('Failed to add stock');
      }
    } catch (err) {
      console.error('Error:', err);
    }

  
    setNewStock({
      date: new Date(),
      description: '',
      type: '',
      quantity: '',
      stockOnHand: '',
      cost: '',
    });
  };

  return (
    <div className="inventory-page">
      <div className="inventory-header">
        <span>Warehouses:</span>
        <select className="inventory-select">
          <option value="all">All</option>
        </select>
        <div className="inventory-actions">
          <button className="btn btn-add" onClick={() => setShowForm(true)}>+ Add New Stock</button>
          <button className="btn btn-manage">Manage</button>
        </div>
      </div>

      
      {showForm && (
        <div className="modal">
          <div className="modal-content">
            <h2>Add New Stock</h2>
            <form onSubmit={handleAddStock}>
              
              <DatePicker
                selected={newStock.date}
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                className="form-control"
                placeholderText="Select Transaction Date"
                required
              />
              <input
                type="text"
                name="description"
                placeholder="Product Description"
                value={newStock.description}
                onChange={handleInputChange}
                required
              />
              <input
                type="text"
                name="type"
                placeholder="Transaction Type"
                value={newStock.type}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                name="quantity"
                placeholder="Transaction Quantity"
                value={newStock.quantity}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                name="stockOnHand"
                placeholder="Stock on Hand"
                value={newStock.stockOnHand}
                onChange={handleInputChange}
                required
              />
              <input
                type="number"
                name="cost"
                placeholder="Pre Avg Cost"
                value={newStock.cost}
                onChange={handleInputChange}
                required
              />
              <button type="submit" className="btn btn-add">Add Stock</button>
              <button
                type="button"
                className="btn btn-cancel"
                onClick={() => setShowForm(false)}
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}

      <table className="inventory-table">
        <thead>
          <tr>
            <th>Transaction Date</th>
            <th>Prod Description</th>
            <th>Trans Type</th>
            <th>Trans Qty</th>
            <th>Stock on Hand</th>
            <th>Pre Avg Cost</th>
          </tr>
        </thead>
        <tbody>
          {inventory.map((item, index) => (
            <tr key={index}>
              <td>{new Date(item.date).toLocaleDateString()}</td>
              <td>{item.description}</td>
              <td>{item.type}</td>
              <td>{item.quantity}</td>
              <td>{item.stockOnHand}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Inventory;
