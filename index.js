let express = require('express');
let app = express();
let dotenv = require('dotenv')
dotenv.config()
let port = process.env.PORT || 7800;
let mongo = require('mongodb');
const { response } = require('express');
let MongoClient = mongo.MongoClient;
let MongoUrl =process.env.LiveMongo;
let db;
let cors = require('cors')
let bodyparser=require('body-parser');
const bodyParser = require('body-parser');

app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send('hii from express')
})

//user details
app.get('/user',(req,res)=>{
    db.collection('user').find().toArray((err, result)=>{
        if (err) throw err;
        res.send(result)
    })
})

//category Detail
app.get('/category',(req,res)=>{
    db.collection('category').find().toArray((err, result)=>{
        if (err) throw err;
        res.send(result)
    })
})


//product details wrt to product category
app.get('/ProductDetails',(req,res)=>{
    let CategoryId = Number(req.query.CategoryId)
    let query={}
    if(CategoryId){
        query= {category_id:CategoryId}
    }else{
        query={}
    }
    db.collection('product').find(query).toArray((err, result)=>{
        if (err) throw err;
        res.send(result)
    })
})

//order Details
app.get('/OrderDetails',(req,res)=>{
    let user_id = Number(req.query.user_id);
    let query = {}
    if(user_id){
        query={user_id:user_id}
    }else{
        query={}
    }
    db.collection('order').find().toArray((err, result)=>{
        if (err) throw err;
        res.send(result)
    })
})

//placeorder
app.post('/placeOrder',(req,res) => {
    db.collection('order').insert(req.body,(err,result) => {
        if(err) throw err;
        res.send('Order Placed')
    })
})

//payment Details
app.get('/PaymentDetails',(req,res)=>{
    db.collection('payment').find().toArray((err, result)=>{
        if (err) throw err;
        res.send(result)
    })
})

//Delivery Details
app.get('/DeliveryDetails',(req,res)=>{
    db.collection('deliver').find().toArray((err, result)=>{
        if (err) throw err;
        res.send(result)
    })
})

//updateOrder
app.put('/updateOrder/:id',(req,res) => {
    let oid = Number(req.params.id);
    db.collection('order').updateOne(
        {order_id:oid},
        {
            $set:{
                "status":req.body.status,
                "bank_name":req.body.bank_name,
                "date":req.body.date
            }
        },(err,result) => {
            if(err) throw err;
            res.send('Order Updated')
        }
    )
})

//deleteOrder
app.delete('/deleteOrder/:id',(req,res) => {
    let _id = mongo.ObjectId(req.params.id);
    db.collection('order').remove({_id},(err,result) => {
        if(err) throw err;
        res.send('Order Deleted')
    })
})

//connection with db
MongoClient.connect(MongoUrl, (err, client)=>{
  if (err) console.log('error while connection');
  db=client.db('flowerdatabase');
  app.listen(port,()=>{
    console.log(`server ${port}`)
})
})