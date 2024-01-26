const DishModel = require("./DishModel");

//GET 

module.exports.getDish = async(req, res) => {
    const myDish = await DishModel.find();
    res.send(myDish)
}

module.exports.addDish = async(req, res) => {
    const { name } = req.body;
    DishModel.create({name})
    .then((data) => {console.log("Dish added")
    res.send(data)
})
}

module.exports.deleteDish = async(req, res) => {
    const {_id} = req.body;
    DishModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a dish'))
}