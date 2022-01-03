const books = require('express').Router()
const Books = require('../models/books')

//ROUTES


//SEED
books.get('/seed', (req, res) => {
    Books.insertMany(
        [
            {
                "title": "The Shinobi Initiative",
                "description": "The reality-bending adventures of a clandestine service agency in the year 2166",
                "year": 2014,
                "quantity": 10,
                "imageURL": "https://imgur.com/LEqsHy5.jpeg"
              },
              {
                "title": "Tess the Wonder Dog",
                "description": "The tale of a dog who gets super powers",
                "year": 2007,
                "quantity": 3,
                "imageURL": "https://imgur.com/cEJmGKV.jpg"
              },
              {
                "title": "The Annals of Arathrae",
                "description": "This anthology tells the intertwined narratives of six fairy tales.",
                "year": 2016,
                "quantity": 8,
                "imageURL": "https://imgur.com/VGyUtrr.jpeg"
              },
              {
                "title": "W∀RP",
                "description": "A time-space anomaly folds matter from different points in earth's history in on itself, sending six unlikely heroes on a race against time as worlds literally collide.",
                "year": 2010,
                "quantity": 4,
                "imageURL": "https://imgur.com/qYLKtPH.jpeg"
              }])
                .then(res.status(200).json({
                    message: 'Seed successful'
                }))
                .catch(res.status(400).json({
                    message: 'Seed unsuccessful'
                }))
        })
    
//INDEX
books.get('/', (req, res) => {
    Books.find()
    .then(foundBooks => {
        res.json(foundBooks)
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({message: "Something isn't working"})
    })
})

//SHOW
books.get('/:name', (req, res) => {
    Books.findOne({name: req.params.name})
    .then(foundBook => {
        res.json(foundBook)
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({message: "Something isn't working"})
    })
})

//CREATE
books.post('/', (req, res) => {
    Books.create(req.body)
    .then(createdBook => {
        console.log(createdBook)
        res.json(createdBook)
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({message: "Something isn't working"})
    })
})

//EDIT
books.put('/:name', (req, res) => {
    Books.findByIdAndUpdate({id: req.params.id})
    .then(updatedBook => {
        console.log(updatedBook)
        res.json(updatedBook)
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({message: "Something isn't working"})
    })
})

//DELETE
books.delete('/:name', (req, res) => {
    Books.findByIdAndDelete({id: req.params.id})
    .then(deletedBook => {
        console.log(deletedBook)
        res.json({message: "Book was successfully deleted"})
    })
    .catch(err => {
        console.log(err)
        res.status(404).json({message: "Something isn't working"})
    })
})

module.exports = books