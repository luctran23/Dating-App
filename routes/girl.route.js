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
module.exports = router;