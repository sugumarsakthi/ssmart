const orderModel = require ('../models//orderModel')

exports.createOrder = async (req,res,next)=>{
    const cardItems = req.body;
    const name = cardItems.reduce(item => (item.name));
    const price = cardItems.reduce(item => (item.price));
    const date = cardItems.reduce(item => (item.date));
    console.log(name,"name")


    const Order = await orderModel.create({cardItems, name, price,date});

    res.json(
        {
            success:true,
            Order
        }
    )
}