const express = require('express');
const router = express.Router();
const Girl = require('../models/girl.model');


router.get('/', async (req, res) => {
    try {
        const girls = await Girl.find();
        res.json(girls);
    } catch (error) {
        res.json({message: error });
    }
});

router.post('/', async (req, res) => {
    const girl = new Girl({
        name: req.body.name,
        age: req.body.age,
        hometown: req.body.hometown
    });
    try {
        const savedGirl = await girl.save();
        res.json(savedGirl);
    } catch (error) {
        res.json({message: error });
    }
    

});

// SPECIFIC GIRL
router.get('/:girlId', async (req, res) => {
    try {
        const specificGirl = await Girl.findById(req.params.girlId);
        res.json(specificGirl);
    } catch (error) {
        res.json({message: error });
    }
});

//Delete GIRL
router.delete('/:girlId', async (req, res) => {
    try {
        const removedGirl = await Girl.deleteOne({ _id: req.params.girlId });
        res.json(removedGirl);
    }
    catch(err) {
        res.json({ message: err });
    }

});

// UPDATE GIRL
router.patch('/:girlId', async(req, res) => {
   
    try {
    const updatedGirl = await Girl.updateOne({ _id: req.params.girlId }, 
        {$set: {
            name: req.body.name,
            age: req.body.age,
            hometown: req.body.hometown
        } });
    res.json(updatedGirl);
    } catch (error) {
        res.json({ message: err });
    }

})
module.exports = router;