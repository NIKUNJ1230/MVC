const { Router } = require('express');

const{ userhome ,login,signup} = require("../controllers/user.controller")

const userroute = Router();
userroute.get('/' , userhome);
userroute.post('/login', login);
userroute.post('/signup', signup);

module.exports = userroute;