// user.route.js

const router = require('express').Router();
let User = require('./user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;
    const address = req.body.address;
    const card_number = req.body.card_number;
    const cvv = req.body.cvv;
    const card_date = req.body.card_date;
    const newUser = new User({ username, password, address, card_number, cvv, card_date });
    console.log(newUser);
    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    User.findById(req.params.id)
        .then(exercise => res.json(exercise))
        .catch(err => res.status(402).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/cart/:id').put((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.cart.push(req.body.cart);

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