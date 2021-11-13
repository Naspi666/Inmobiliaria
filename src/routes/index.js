const express = require('express');
const router = express.Router();

const User = require('../models/user');

router.get('/', async (req, res) => {
    const users = await User.find();
    res.render('index',{
        users
    });
});

router.post('/add', async (req, res) => {
    const user = new User(req.body);
    await user.save();
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await User.deleteOne({_id: id});
    res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);
    res.render('edit', {
        user
    });
});

router.post('/edit/:id', async (req, res) => {
    const { id } = req.params;
    await User.updateOne({_id: id}, req.body);
    res.redirect('/');
});

module.exports = router;