const productModel = require('../models/productsModel');

//Get Products API - api/v1/products
exports.getProducts = async (req,res,next)=>{

    const products = await productModel.find({})

    res.json({  
        success:true,
        products
    })
}

//Get Single Products API - api/v1/products:/id
exports.getSingleProducts = async (req, res, next) => { 

    try{
        const product = await productModel.findById(req.params.id);
         res.json({
            success:true,
            product
        })
    }catch(error){
        res.json({
            success:false,
            message:'unable to find the product id'
        })
    }
    

   
}