//Inside router.js file, import express

const express = require('express')

//Import product Controller
const productController = require('../controllers/productController')

//Import Wishlists
const wishlistController = require ('../controllers/wishlistController')

//Import Cart Controller
const cartsController = require ('../controllers/cartController')

//Using express create an object for router class inorder to setup path
const router = new express.Router()

//Resolve client request in various server routes 
//All api call will be resolved

//get all products
router.get('/products/all-products', productController.getAllProducts)


//get particular product details
router.get('/products/viewproducts/:id',productController.viewProducts)



//Add to wishlist product
router.post('/products/addtowishlist', wishlistController.addtowishlist)

//get Wishlist products
router.get('/products/getwishlist', wishlistController.getwishlist)

//Delete Wishlist product
router.delete('/products/deletewishlist/:id', wishlistController.deleteWishlist)

//
router.post('/products/addtocart', cartsController.addToCart)

//
// router.get('/products/getcarts' , cartsController.getCart)

router.get('/products/getcarts', cartsController.getCart)

//delete cart
router.delete('/products/deletecart/:id',cartsController.deleteCart)

//Cart Increment
router.get('/products/increment/:id', cartsController.incrementCart)

//cart Decrement
router.get('/products/decrement/:id',cartsController.decrementCart)

//Export router
module.exports = router