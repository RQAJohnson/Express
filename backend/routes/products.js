const router = require(`express`).Router();
const {Product} = require(`../config/db`)


router.get("/getAll", (req, res, next) => {
    Product.find((err, products) => {
        if (err) {
            next(err);
        }
        res.send(products);
    });
});

router.get("/get/:id", (req,res,next) => {
    Product.findById(req.params.id, (err,result) => {
        if(err){
            next(err);
        }
        res.status(200).send(result);
    })
})

router.post("/create", (req, res, next) => {
    const product = new Product(req.body);
    product.save()
        .then((result) => {
            res.status(201).send(`${result.name} has been added to store!`)
        })
        .catch((err) => next(err));
});


router.delete("/delete/:id", (req, res, next) => {
    Product.findByIdAndDelete(req.params.id, (err) => {
        if(err){
            next(err);
        }
        res.status(204).send(`Successfully deleted from store`);
    });
});


router.patch("/update/:id", (req, res, next) => {
   Product.findByIdAndUpdate(req.params.id, 
    req.body, 
    {new: true}, 
    (err) => {
       if(err){
           next(err);
       }
       res.status(202).send(`Successfully updated!`);
   })
});

//replace and/or update
router.put("/replace/:id", (req,res,next) => {
    const {name, price, scent} = req.query;
    Product.findByIdAndUpdate(req.params.id, {name,price,scent}, {new: true}, (err)=>{
        if(err){
            next(err);
        }
        res.status(202).send(`Successfully replaced!`);
    });
});




module.exports = router