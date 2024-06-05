const mongoose = require('mongoose')

const connlink = "mongodb+srv://admin:admin123@cluster0.cxvzrpo.mongodb.net/projectmanagement"
const success = mongoose.connect(connlink)

if(success)
{
    console.log("Connected to database")   
}

const Users = new mongoose.Schema({
    useremail:String,
    username:String,
    userpassword:String
})
const Client = new mongoose.Schema({
    useremail:String,
    clientname:String,
    clientemail:String,
    clientcontactnumber:String
})
const Project = new mongoose.Schema({
    useremail:String,
    projecttitle:String,
    projectdescription:String,
    projectclient:String
})

const user = mongoose.model('user',Users)
const client = mongoose.model('client',Client)
const project = mongoose.model('project',Project)

module.exports = {user,client,project}
