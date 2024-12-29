const express = require("express");
const app = express();
const path = require("path");

const userModel_E = require('./modules/RCEdB_E', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const userModel_C = require('./modules/RCEdB_C', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const userModel_P = require('./modules/RCEdB_P', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const userModel_P2 = require('./modules/RCEdB_P2', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
const userModel_T = require('./modules/RCEdB_T', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, "public")));


app.get("/", async function(req, res){
    let RCEData_E = await userModel_E.find();
    let RCEData_C = await userModel_C.find();
    let RCEData_P = await userModel_P.find();
    let RCEData_T = await userModel_T.find();
    res.render("index", {
        RCEData_E: RCEData_E, 
        RCEData_C: RCEData_C, 
        RCEData_P: RCEData_P, 
        RCEData_T: RCEData_T
    });
})

app.get("/form", function(req, res){
    res.render("form.ejs");
})

app.get("/portfolio", async function(req, res){
    let RCEData_P2 = await userModel_P2.find();
    res.render("portfolio", {
        RCEData_P2: RCEData_P2
    });
})

app.listen(3000, ()=>{
    console.log("Server is live !!!");
})