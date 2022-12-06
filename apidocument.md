///Live api url
https://flowerstationapi.onrender.com

with all routes
>list of user
https://flowerstationapi.onrender.com/user

>list of products
https://flowerstationapi.onrender.com/ProductDetails

>list of category
https://flowerstationapi.onrender.com/category

>>List of products wrt product category
https://flowerstationapi.onrender.com/ProductDetails/?CategoryId=14

>Details of product wrt product id , cost
https://flowerstationapi.onrender.com/filters/1?hcost=500&lcost=100

>Order Details
https://flowerstationapi.onrender.com/OrderDetails

>Order Details wrt UserId
https://flowerstationapi.onrender.com/OrderDetails?UserId=2

>Sort on basis of cost
https://flowerstationapi.onrender.com/filter/3

>Payment DEtails
https://flowerstationapi.onrender.com/PaymentDetails

>Deliver details
http://flowerstationapi.onrender.com/DeliveryDetails

>Delete order
http://flowerstationapi.onrender.com/deleteOrder/638f37c987a2bdc1f68a6ba4

>update order
http://flowerstationapi.onrender.com/updateorder/5
body-
{
"status":"success",
"bank_name":"HDFC"
}

>Place Order(POST)
http://flowerstationapi.onrender.com/placeOrder
body-
{
"o_id": 6,
"date_of_order": "19/10/2022",
"time_of_order": "01:00PM",
"place_of_delivery": "Noida",
"City_of_delivery": "Uttar Pradesh",
"Country_of_delivery": "India",
"p_id": 6,
"Quantity": 1,
"product_price":1699,
"user":[
     {
"user_name": "Anita Sharma",
"phone_no": "9911554466"
}
]
}

>List of products
http://localhost:9800/ProductDetails

>Details of category
http://localhost:9800/category

>List of products wrt product category
http://localhost:9800/ProductDetails/?CategoryId=14

>Details of product wrt product id , cost
http://localhost:9800/filters/1?hcost=500&lcost=100

>List of users
http://localhost:9800/user

>Order Details
http://localhost:9800/OrderDetails

>Order Details wrt UserId
http://localhost:9800/OrderDetails?UserId=2

>Sort on basis of cost
http://localhost:9800/filter/3

>update order
http://localhost:9800/updateorder/6
body-
{
"status":"success",
"bank_name":"HDFC"
}

>Place Order(POST)
http://localhost:9800/placeOrder
body-
{
"o_id": 6,
"date_of_order": "19/10/2022",
"time_of_order": "01:00PM",
"place_of_delivery": "Noida",
"City_of_delivery": "Uttar Pradesh",
"Country_of_delivery": "India",
"p_id": 6,
"Quantity": 1,
"product_price":1699,
"user":[
     {
"user_name": "Anita Sharma",
"phone_no": "9911554466"
}
]
}

>Payment details
http://localhost:9800/PaymentDetails

>Deliver details
http://localhost:9800/DeliveryDetails

>Delete order
http://localhost:9800/deleteOrder/638f37c987a2bdc1f68a6ba4