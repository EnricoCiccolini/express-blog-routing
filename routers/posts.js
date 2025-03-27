const express = require('express')
const router = express.Router()
const posts = require('../posts')
console.log(posts)


router.get('/', function (req, res) {
    // res.send(' lista dei post')
    res.json(posts)
})


router.get('/:id', function (req, res) {
   // res.send('dettagli del dolce n' + req.params.id)
  const param = req.params.id
  const result = posts.find(({ slug }) => slug === param);
  res.json(result)
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