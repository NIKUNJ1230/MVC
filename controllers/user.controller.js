
// const user = require ("../models/user.schema.js");
const user = require ("../models/user.schema");

const userhome = (req , res) => {
    res.send("Welcome to our homepage!");
}

const login = (req , res) => {
    res.send("you are succsel fully logedin!");
}

const signup = async(req , res) => {
console.log(req.body);
await user.create(req.body);
res.send("you are successfully signed up!");

};


module.exports = { login , signup , userhome};