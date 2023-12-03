var express = require('express');
var router = express.Router();
var CategoriesModel = require("../models/categories");
var OrdersModel = require("../models/orders");
var RestaurantsModel = require("../models/restaurants");
var ProductsModel = require("../models/products");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/products', function(req, res, next) {
  return ProductsModel.find({restaurantId: 1}).then((data) =>  res.send(data))
  .catch(error => {
    console.log(error.message)
  })
})

router.get('/restaurants', function(req, res, next) {
    console.log(req.query)
    let query = {};
    if (req.query.categoryId) {
        query.categoryIds = req.query.categoryId
    } 
    RestaurantsModel.find(query ).then((data) =>  res.send(data));
//   res.send([
//     {
//         name:'McDonald',
//         icon:'https://www.shutterstock.com/image-vector/logo-famous-identity-city-style-260nw-2275339803.jpg',
//         deliveryTime:'10-20 min',
//         id:1
//     },
//     {
//         name:'KFC',
//         icon:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly9kMXJhbHNvZ25qbmczNy5jbG91ZGZyb250Lm5ldC9hZDYxMTZkNS1jZTkzLTQxNzQtOWQ3NC02ZjM2MGI1YWYxZTQuanBlZw==',
//         deliveryTime:'5-10 min',
//         id:2
//     },
//     {
//         name:'Pizza',
//         icon:'https://cn-geo1.uber.com/image-proc/resize/eats/format=webp/width=550/height=440/quality=70/srcb64=aHR0cHM6Ly90Yi1zdGF0aWMudWJlci5jb20vcHJvZC9pbWFnZS1wcm9jL3Byb2Nlc3NlZF9pbWFnZXMvMWRhMjEzYWM3MWYwM2M0NTQwN2ZhZWNiYTRmOTg1ZmEvNzkxNWM0YTc4YTlmOTRlZDU2MzE2YzdjNGRjMGVjODkuanBlZw==',
//         deliveryTime:'30-45 min',
//         id:3
//     }
// ]);
});


router.get('/products/:restaurantId', function(req, res, next) {
    ProductsModel.find({restaurantId:req.params.restaurantId}).then((data) =>  res.send(data));

});


router.get('/restaurant/:restaurantId', function(req, res, next) {
  RestaurantsModel.findOne({id:req.params.restaurantId}).then((data) =>  res.send(data));

});


router.get('/categories', function(req, res, next) {
    CategoriesModel.find({}).then((data) =>  res.send(data));
//     res.send([
//         {
//             name: 'Deals',
//             icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/deals.png',
//             categoryId: 1
//         },
//         {
//             name: 'Grocery',
//             icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/uber_grocery.png',
//             categoryId: 2
//         },
//         {
//             name: 'Convenience',
//             icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/convenience.png',
//             categoryId: 3 
//         },
//         {
//             name: 'Coffee and tea',
//             icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/cuisines/coffeeandtea.png',
//             categoryId: 4
//         },
//         {
//             name: 'Retail',
//             icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/retail-v2.png',
//             categoryId:5 
//         },
//         {
//             name: 'Alcohol',
//             icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/alcohol.png',
//             categoryId: 6
//         },
//         {
//             name: 'Pharmacy',
//             icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/pharmacy-v2.png',
//             categoryId: 7
//         },
//         {
//             name: 'Baby',
//             icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/baby.png',
//             categoryId: 8
//         },
//         {
//             name: 'Pet supplies',
//             icon:'https://cn-geo1.uber.com/static/mobile-content/eats/pet_supplies.png',
//             categoryId: 9
//         },
//         {
//             name: 'Flowers',
//             icon:'https://cn-geo1.uber.com/static/mobile-content/eats/flowers_transparent_background.png',
//             categoryId: 10
//         },
//         {
//             name: 'Specialty Foods',
//             icon:'https://cn-geo1.uber.com/static/mobile-content/eats/specialy_transparent_background.png',
//             categoryId: 11
//         },
//         {
//             name: 'Electronics',
//             icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/electronics.png',
//             categoryId: 12
//         },
//         {
//             name: 'Best overall',
//             icon:'https://d4p17acsd5wyj.cloudfront.net/shortcuts/top_eats.png',
//             categoryId: 13
//         },
//   ]);
  });

  router.get('/orders', function(req, res, next) {
    OrdersModel.find({}).then((data) =>  res.send(data));
  });

 

  module.exports = router;


