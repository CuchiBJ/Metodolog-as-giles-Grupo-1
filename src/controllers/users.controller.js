const usersCtrl = {};
const User = require('../models/User');
const bcrypt =require('bcryptjs');
const jwt = require('jsonwebtoken');
const config  = require('../config/config');

usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup.html');
};

usersCtrl.signup = async (req, res) => {
    const user = new User();
    user.name=req.body.name;
    user.email=req.body.email;
    user.password=req.body.password;
    user.confirm_password=req.body.confirm_password;
    user.role=req.body.role;
    console.log(user);
    await user.save();
    res.redirect('/')
};

usersCtrl.renderSigninForm = (req, res) => {
    res.render('users/signin.html')
}

usersCtrl.signin =(req, res) => {
     let email = req.body.email;
     let password = req.body.password;
     User.findOne({email}) 
     .then(user =>{
        if (!user) return res.status(404).send({message: "el usuario no existe"});
        bcrypt.compare(password,user.password) 
            .then(match => {
                if(match) {
                    payload ={
                        email: user.email,
                        role: user.role,
                    }
                   jwt.sign(payload, config.SECRET_TOKEN, function(error,token){
                       if(error) {
                           res.status(500).send({error});
                       }else{
                           res.status(200).send({message: 'acceso', token});
                       }
                   })
                }else{

                    return res.status(404).send({message: 'password incorrecta'});

                }

            }).catch(error=>console.log(error));
     }).catch(error=> console.log(error));
}

usersCtrl.logout =(req,res) => {
    res.send('logout');
}

module.exports = usersCtrl;