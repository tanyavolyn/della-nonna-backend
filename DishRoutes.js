const { Router } = require("express");
const { getDish, addDish, deleteDish } = require("./DishController");

const router = Router();

// router.get('/', (req, res) => {
//     res.json({test: "WE GOT HERE!!!"})
// })

router.get('/', getDish);
router.post('/addDish', addDish);
router.post('/deleteDish', deleteDish)


module.exports = router;