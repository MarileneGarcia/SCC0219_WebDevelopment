// glass.route.js

const router = require('express').Router();
let Glass = require('./glass.model');

router.route('/').get((req, res) => {
    Glass.find()
        .then(glasses => res.json(glasses))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password= req.body.password;
    const address = req.body.address;
    const cart = req.body.cart;
    const card_number = req.body.card_number;
    const cvv = req.body.cvv;
    const card_date = req.body.card_date;
    const newUser = new User({ username, password, address, cart, card_number, cvv, card_date });

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/cart/:id').put((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.cart = req.body.cart;

            user.save()
                .then(() => res.json('Cart updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/fav/:id').put((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.fav = req.body.fav;

            user.save()
                .then(() => res.json('Favs updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});




module.exports = router;