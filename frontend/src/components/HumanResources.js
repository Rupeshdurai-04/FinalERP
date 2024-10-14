import React, { useState, useEffect } from 'react';
import './HumanResources.css'; 
import person1 from '../assets/emp1.jpg'; 
import axios from 'axios'; 

const HumanResources = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState('All');
  const [showForm, setShowForm] = useState(false);
  const [newEmployee, setNewEmployee] = useState({
    name: '',
    role: '',
    phone: '',
    email: '',
    status: 'Active',
    image: person1,
  });
  const [previewImage, setPreviewImage] = useState(null);

  
  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/employees');
        setEmployees(res.data);
      } catch (err) {
        console.error('Error fetching employees:', err);
      }
    };
    fetchEmployees();
  }, []);

  const filterEmployees = () => {
    if (selectedStatus === 'All') {
      return employees;
    } else {
      return employees.filter(employee => employee.status === selectedStatus);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee(prevState => ({ ...prevState, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewEmployee(prevState => ({ ...prevState, image: reader.result }));
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddEmployee = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/employees', newEmployee);
      setEmployees([...employees, res.data]);
      setNewEmployee({ name: '', role: '', phone: '', email: '', status: 'Active', image: person1 });
      setPreviewImage(null);
      setShowForm(false);
    } catch (err) {
      console.error('Error adding employee:', err);
    }
  };


  const handleDeleteEmployee = async (id) => {
    try {
      
      if (!id) {
        console.error('Invalid employee ID');
        return;
      }
  
      
      const response = await axios.delete(`http://localhost:5000/api/employees/${id}`);
      
      if (response.status === 200) {
      
        setEmployees(employees.filter(employee => employee._id !== id));
        console.log('Employee deleted successfully');
      } else {
        console.error('Error deleting employee:', response.data.message);
      }
    } catch (err) {
      console.error('Error deleting employee:', err.message);
    }
  };
  

  return (
    <div className="hr-container">
      <header className="hr-header">
        <h2>EMPLOYEES</h2>
        <nav className="hr-tabs">
          <button className={`tab ${selectedStatus === 'All' ? 'active' : ''}`} onClick={() => setSelectedStatus('All')}>All</button>
          <button className={`tab ${selectedStatus === 'Active' ? 'active' : ''}`} onClick={() => setSelectedStatus('Active')}>Active</button>
          <button className={`tab ${selectedStatus === 'Terminated' ? 'active' : ''}`} onClick={() => setSelectedStatus('Terminated')}>Terminated</button>
          <button className={`tab ${selectedStatus === 'Resigned' ? 'active' : ''}`} onClick={() => setSelectedStatus('Resigned')}>Resigned</button>
          <button className={`tab ${selectedStatus === 'Trash' ? 'active' : ''}`} onClick={() => setSelectedStatus('Trash')}>Trash</button>
        </nav>
        <button className="add-employee-btn" onClick={() => setShowForm(true)}>+ Add New Employee</button>
      </header>

      {showForm && (
        <div className="employee-form">
          <h3>Add New Employee</h3>
          <form onSubmit={handleAddEmployee}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={newEmployee.name}
              onChange={handleInputChange}
              required
            />
            <input
              type="text"
              name="role"
              placeholder="Role"
              value={newEmployee.role}
              onChange={handleInputChange}
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={newEmployee.phone}
              onChange={handleInputChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={newEmployee.email}
              onChange={handleInputChange}
              required
            />
            <select
              name="status"
              value={newEmployee.status}
              onChange={handleInputChange}
            >
              <option value="Active">Active</option>
              <option value="Terminated">Terminated</option>
              <option value="Resigned">Resigned</option>
              <option value="Trash">Trash</option>
            </select>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
            {previewImage && <img src={previewImage} alt="Preview" className="image-preview" />}
            <button type="submit">Add Employee</button>
            <button type="button" onClick={() => setShowForm(false)}>Cancel</button>
          </form>
        </div>
      )}

      <div className="employee-grid">
        {filterEmployees().map((employee) => (
          <div className="employee-card" key={employee._id}>
            <img src={employee.image} alt={employee.name} className="employee-avatar" />
            <div className="employee-info">
              <div className="employee-main">
                <h3 className="employee-name">{employee.name}</h3>
                <p className="employee-role">{employee.role}</p>
              </div>
              <div className="employee-contact">
                <p>{employee.phone}</p>
                <p>{employee.email}</p>
              </div>
            </div>
            <div className={`status-badge status-${employee.status.toLowerCase()}`}>
              {employee.status}
            </div>
            <button className="delete-employee-btn" onClick={() => handleDeleteEmployee(employee._id)}>
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HumanResources;
