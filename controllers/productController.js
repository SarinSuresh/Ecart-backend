//Import product collection
const products = require('../models/productSchema')

//Define logic to resolve client request\


//Get all Products
exports.getAllProducts = async (req, res) => {
    try {
        //get all products from products collection in MongoDB
        const allProducts = await products.find()
        res.status(200).json(allProducts)
    } catch (error) {
        res.status(401).json(error)
    }
}

//get pirticualar product from an id
exports.viewProducts = async (req, res) => {
    const id = req.params.id
    //Logic
    try {
        const product = await products.findOne({ id })
        if (product) {
            res.status(200).json(product)
        } else {
            res.status(404).json('Product not found')
        }
    } catch (error) {
        res.status(404).json(error)
    }
}  
