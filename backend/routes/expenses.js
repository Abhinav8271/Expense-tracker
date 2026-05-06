const express = require('express')
const router = express.Router();
const Tracker = require('../models/Expense.js')

router.post('/expenses', async(req, res) => {
  try{
    const {title, amount, category, date} = req.body;

    const newTrack = new Tracker({
      title,
      amount, 
      category,
      date
    });

    await newTrack.save();

    return res.status(201).json({
      message: "Expense added",
      expense: newTrack

    })
  }catch(error){
    console.log("Error");
    return res.status(500).json({
      message: "Internal Message Error"
    })
  }
})


router.get('/expenses', async(req, res) => {
  try{
    const lists = await Tracker.find();
    return res.status(200).json({
     lists
    })
  }catch(error){
    console.log("Error");
    return res.status(500).json({
      message: "Internal Message Error"
    })
  }
})


router.delete('/expenses/:id', async(req, res) => {
  try{
    const id = req.params.id;
    await Tracker.findByIdAndDelete(id)
    return res.status(200).json({
      message: "Expense deleted"
    })
  }catch(error){
    console.log("Error");
    return res.status(500).json({
      message: "Internal Message Error"
    })
  }
})

module.exports = router