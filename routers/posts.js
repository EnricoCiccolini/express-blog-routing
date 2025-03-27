const express = require('express')
const router = express.Router()



router.get('/', function (req, res) {
    res.send(' lista dei post')
})


router.get('/:id', function (req, res) {
    res.send('dettagli del dolce n' + req.params.id)
})


router.post('/', function (req, res) {
    res.send('creazione di un nuovo dolce')
})

router.put('/:id', function (req, res) {
    res.send('modifica tutto il dolce n' + req.params.id)
})

router.patch('/:id', function (req, res) {
    res.send('modnifica in parte il dolce n ' + req.params.id)
})

router.delete('/:id', function (req, res) {
    res.send('elimina il dolce n ' + req.params.id)
})

module.exports = router;