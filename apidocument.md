>Live api
https://flower-restapi.onrender.com

>live api with routes

User Details
https://flower-restapi.onrender.com/user

Products Details
https://flower-restapi.onrender.com/ProductDetails

Product WRT Product Category
https://flower-restapi.onrender.com/ProductDetails/?CategoryId=2

Category Detail
https://flower-restapi.onrender.com/category

Order Details
https://flower-restapi.onrender.com/OrderDetails

Payment Details
https://flower-restapi.onrender.com/PaymentDetails


Deliver details
https://flower-restapi.onrender.com/DeliveryDetails

Local APi

>List of products
http://localhost:9800/ProductDetails


>List of products wrt product category
http://localhost:9800/ProductDetails/?CategoryId=2

>Details of category
http://localhost:9800/category


>List of users
http://localhost:9800/user


>Order Details
http://localhost:9800/OrderDetails

>order Details wrt user id
http://localhost:9800/orders?user_id-2

>Payment details
http://localhost:9800/PaymentDetails


>Deliver details
http://localhost:9800/DeliveryDetails

>delete order
http://localhost:9800/deleteOrder/637e10cbcb7768bd03f40476

>place Orders
http://localhost:9800/placeOrder
body 
{
    "o_id":6,
    "date_of_order":"21/10/2022",
    "time_of_order":"01:00PM",
    "place_of_delivery":"Shahdara",
    "City_of_delivery":"Delhi",
    "Country_of_delivery":"India",
    "product":
    {
        "p_id":2
    },
    "Quantity":1,
    "product_price":"Rs. 824/-",
    "user":
    {
        "user_id" : 2,
        "user_name" : "Smriti Verma",
        "phone_no" : "9911586290"
    }
}