const {Router } = require('express')
const {user,client,project} = require('../db/dbschema')
const jwt = require('jsonwebtoken')
const {JWT} = require('../config')
const {fetchuser} = require('../middle/middleware')
const route = Router();

//------------------------------SIGNUP------------------------------

route.post('/signup',async (req,res)=>{
    const useremail = req.body.useremail;
    const username = req.body.username;
    const userpassword = req.body.userpassword;

    const finduser = await user.findOne({
        useremail
    })
    if(finduser)
    {
        res.json({
            success:false,
            msg:'User already exist'
        })
    }
    else
    {
        const newuser = await user.create({
            useremail,
            username,
            userpassword
        })
        if(newuser)
        {
            const token = jwt.sign({useremail},JWT)
            localStorage.setItem('token',token)
            res.json
            ({
                success:true,
                token
            })

        }
    }
})

//-------------------------end of signup----------------------------



//----------------------------signin-------------------------------

route.post('/sigin',async(req,res)=>{
    const useremail = req.body.useremail;
    const userpassword = req.body.userpassword;

    const finduser = await user.findOne({
        useremail
    })
    if(finduser)
    {
        const pass = userpassword === finduser.userpassword
        if(pass)
        {
            const token = jwt.sign({
                useremail
            },JWT)
            localStorage.setItem('token',token)
            res.json({
                success:true,
                token
            })
        }
        else
        {
            res.json({
                success:false,
                msg:'Password Invalid'
            })
        }
    }
    else
    {
        res.json({
            success:false,
            msg:'Invalid Credentials'
        })
    }
})

//----------------------end of signin-----------------------------



module.exports = route;