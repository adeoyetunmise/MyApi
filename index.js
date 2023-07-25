const express = require('express')
const app = express()
const bodyParser= require('body-parser')
app.use(bodyParser.urlencoded({extended:true}))
const cors= require('cors')
app.use(cors())
require('dotenv').config()

let port = process.env.port_number

let studentDetails=[
    {
        id:'1',
        firstname:'Tunmise',
        lastname:'Adeoye',
        email:'adeoyetunmise53@gmail.com',
        phoneNo:'+2349030906361',
        complexion:'Fair',
        Age:'26',
        school:'SQI',
        city:'Ottawa',
        country:'Canada'
    },
    {
        id:'2',
        firstname:'Captain',
        lastname:'Jigawa',
        email:'captainjigawa@gmail.com',
        phoneNo:'+2349030906361',
        complexion:'Fair',
        Age:'15',
        school:'Lautech',
        city:'Lagos',
        country:'Nigeria'
        
        
    },
    {
        id:'3',
        firstname:'Ibukun',
        lastname:'Daniel',
        email:'ibukundaniel@gmai.com',
        phoneNo:'+2349030906361',
        complexion:'Dark',
        Age:'34',
        school:'Lautech',
        city:'Abeokuta',
        country:'Nigeria'
        
        
    },
    {
        id:'4',
        firstname:'Bernice',
        lastname:'Aderounmu',
        email:'berniceaderounmu@gmail.com',
        phoneNo:'+2349030906361',
        complexion:'Dark',
        Age:'23',
        school:'Lautech',
        city:'Lagos',
        country:'Nigeria'
        
        
    },
    {
        id:'5',
        firstname:'Bola',
        lastname:'Titi',
        email:'bolatiti@gmail.com',
        phoneNo:'+2349030906361',
        complexion:'Fair',
        Age:'27',
        school:'SQI',
        city:'Abeokuta',
        country:'Nigeria'
        
        
    },
    {
        id:'6',
        firstname:'Temilade',
        lastname:'Boluwatife',
        email:'boluwatifeadeyemo770@gmail.com',
        phoneNo:'+2347088983293',
        complexion:'Dark',
        Age:'14',
        school:'Lautech',
        city:'Osun',
        country:'Nigeria'
        
        
    },
    {
        id:'7',
        firstname:'Temilade',
        lastname:'Boluwatife',
        email:'boluwatifeadeyemo770@gmail.com',
        phoneNo:'+2347088983293',
        complexion:'Dark',
        Age:'14',
        school:'Lautech',
        city:'Osun',
        country:'Nigeria'
        
        
    }
]

app.get('/students',(req,res)=>{
    res.send(studentDetails)
// console.log(studentDetails);

})

app.listen(port,()=>{
console.log(`Server is running on port ${port}`);
})