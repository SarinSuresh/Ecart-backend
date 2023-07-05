//Import Wishlist
const wishlists = require('../models/wishlistSchema')

//Logic for wishlists
exports.addtowishlist= async(req,res)=>{


  const {id,title,price,image} = req.body

  //logic
  try{
      const item= await wishlists.findOne({id})
      if(item){
        res.status(404).json("Product already exists")
      }
      else{
        //add item to wishlist collection
        const newItem = new wishlists({id,title,price,image})
        //to store in wishlist collection
        await newItem.save()
        res.status(200).json("Product added to the wishlist")
      }
  }
  catch(error){
    res.status(404).json(error)
  }
 }


//logic for view wishlist products details
exports.getwishlist = async (req, res) => {
    try {
        const allwishlist = await wishlists.find()
        res.status(200).json(allwishlist)
    } catch (error) {
        res.status(404).json(error)
    }
}


//Delete Wishlist item
exports.deleteWishlist = async (req, res) => {
    const { id } = req.params

    try {
        const removeWishlist = await wishlists.deleteOne({ id })

        if (removeWishlist) {
            const allitems = await wishlists.find()
            res.status(200).json(allitems)
        }

    } catch (error) {
        res.status(404).json(error)
    }
}