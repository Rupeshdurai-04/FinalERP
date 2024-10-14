const express = require('express');
const router = express.Router();
const Employee = require('../models/Employee');


router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ message: 'Server error: Unable to fetch employees' });
  }
});


router.post('/', async (req, res) => {
  const { name, role, phone, email, status, image } = req.body;

  try {
    const newEmployee = new Employee({
      name,
      role,
      phone,
      email,
      status,
      image,
    });

    const savedEmployee = await newEmployee.save();
    res.status(201).json(savedEmployee);
  } catch (err) {
    res.status(400).json({ message: 'Error: Could not save the employee' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ message: 'Employee not found' });
    }

    await Employee.deleteOne({ _id: req.params.id });
    res.json({ message: 'Employee deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
