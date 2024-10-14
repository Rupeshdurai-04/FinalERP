const express = require('express');
const router = express.Router();
const Inventory = require('../models/Inventory');


router.get('/', async (req, res) => {
  try {
    const inventoryItems = await Inventory.find();
    res.json(inventoryItems);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching inventory data' });
  }
});


router.post('/', async (req, res) => {
  const { date, description, type, quantity, stockOnHand, cost } = req.body;

  try {
    const newInventory = new Inventory({
      date,
      description,
      type,
      quantity,
      stockOnHand,
      cost,
    });
    await newInventory.save();
    res.json(newInventory);
  } catch (err) {
    res.status(400).json({ message: 'Error adding inventory data' });
  }
});

module.exports = router;
