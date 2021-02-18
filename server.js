const express = require(`express`);
const cors = require (`cors`);
const bodyParser = require(`body-parser`)

const app = express();
app.use(cors());
app.use(bodyParser.json());


const logger = (req, res, next) => {
    console.log(new Date());
    next();
}

const productRoute = require('./routes/products');
app.use("/product",productRoute);


// app.listen(5019);


//Random port nuumber will be generated
const server = app.listen(5019, () => {
    console.log(`server has started on prt number: ${server.address().port}`);
})
