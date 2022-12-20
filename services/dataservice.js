const db = require('./db')

// getAllProducts
const getAllProducts= ()=>{
   return  db.Product.find()
   .then((data)=>{
    if(data){
        return{
            statusCode: 200,
            result:data
        }
    }
    else{
        return{
        statusCode: 404,
        message : 'Failed to fetch data'
        }
    }
   })
}


// addToWishlist
const addToWishlist=(id,title,price,description,image)=>{
    return db.Wishlist.findOne({
        id
    }).then ((result)=> {
        if(result){
            return{
                statusCode:404,
                message:'Product already in your wishlist'
            };
        }
        else{
            const newProduct = new db.Wishlist({
                 id,
                 title,
                 price,
                 description,
                 image
            });
            newProduct.save()
            return{
                statusCode:200,
                message:"Product Successfully added to WishList"
            }
        }
     });
};

// getWishlist
const getWishlist = ()=>{
    return  db.Wishlist.find()
    .then((data)=>{
     if(data){
         return{
             statusCode: 200,
             result:data
         }
     }
     else{
         return{
         statusCode: 404,
         message : 'Your Wishlist is Empty'
         }
     }
    })
}


// deleteFromWish
const deleteFromWish = (id)=>{
    return db.Wishlist.deleteOne({
        id
    })
    .then(
        (data)=>{
            if(data){
                return{
                    statusCode:200,
                    message:'Product Removed from your wishlist'
                }
            }
            else{
                return{
                    statusCode:404,
                    message:'Product not available'
                };
            }
        }
    )
}


module.exports={
    getAllProducts,
    addToWishlist,
    getWishlist,
    deleteFromWish

}