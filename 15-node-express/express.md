# Express - Library for handling http in node in SPA and API

- npm install express
- import using standard syntax ie import - express from "express";
- declare var = express()
- var.listen(port)
- routing app.get("url", (req,res) =>{}) - common way to write express, uses req and res abbreviated
- res.send() - sending response in express, didnt need to set content type, express detects
- for post response to work you need to send some data
- express runs code top to bottom checking each expression
- middleware - app.use(req, res, next). next needs to be defined before rest of code gets run. next()
- use postman or thunder client to test response and requests, for postman make sure to open desktop app if working locally

- retrieve header using get in express - req.headers

## Body parser - present in express 4.16+

app.use(express.urlencoded({extended: false}));
app.use(express.json());
