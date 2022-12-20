const express = require('express')

const cors = require('cors')

const dataService =require('./services/dataservice')

const app = express()

app.use(cors({
    origin:'http://localhost:4200'
}))

app.listen(3000, ()=>{
    console.log('server started at 3000');
})

app.use(express.json())


// get AllProducts API
app.get('/all-products',(req,res)=>{
    console.log('Inside getAllProducts function');
    dataService.getAllProducts()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


// addToWishlist
app.post('/add-to-wishlist',(req,res)=>{
    console.log('Inside addToWishlist  function');
    console.log(req.body);
    dataService.addToWishlist(req.body.id,req.body.title,req.body.price,req.body.description,req.body.image)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})



// getWishlist
app.get('/get-wishlist',(req,res)=>{
    console.log('Inside getWishlist  function');
    console.log(req.body);
    dataService.getWishlist()
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


// deleteFromWish
app.delete('/delete-item-wishlist/:id',(req,res)=>{
    console.log('Inside deleteFromWish  function');
    dataService.deleteFromWish(req.params.id)
    .then((result)=>{
        res.status(result.statusCode).json(result)
    })
})