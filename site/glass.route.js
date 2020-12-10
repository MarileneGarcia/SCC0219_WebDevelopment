// glass.route.js

const router = require('express').Router();
let Glass = require('./glass.model');
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, './public/images');
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }

});
const upload = multer({ storage: storage });




router.route('/').get((req, res) => { //return all glasses
    Glass.find()
        .then(glasses => res.json(glasses))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.post('/add', upload.single('img'), (req, res) => { //add new glass
    console.log(req.file);

    const code = req.body.code;
    const price = req.body.price;
    const alias = req.body.alias;
    const details = req.body.details;
    const format = req.body.format;
    const tipo = req.body.tipo;
    const img = req.file.filename;
    console.log('was here');
    const newGlass = new Glass({ code, price, alias, details, format, tipo, img });
    console.log(newGlass);
    newGlass.save().then(() => {
        res.json('glass added');
    }).catch(err => {
        res.json(err)
    });

});

router.route('/:id').get((req, res) => { //get glass by id
    Glass.findById(req.params.id)
        .then(glass => res.json(glass))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => { //delete by id
    Glass.findByIdAndDelete(req.params.id)
        .then(() => res.json('glass deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;