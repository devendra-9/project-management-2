const jwt = require('jsonwebtoken')
const {JWT} = require('../config')

const fetchuser = (req,res,next) =>
{
    const token = localStorage.getItem('token')   
    if(!token)
    {
        res.json({
            msg:'Authentication failed'
        })
    }
    else
    {
        const useremail = jwt.verify(token,JWT)
        req.useremail = useremail
        next();
    }
}

module.exports = {fetchuser}