var request = require('request');
request('https://economia.awesomeapi.com.br/json/list/USD-BRL/1', function (error, response, body) {
  console.log('error:', error)
  console.log('statusCode:', response && response.statusCode); 
  console.log('body:', body); 
  console.log(' “nome”:' + name);
  console.log(' “highValue”:' + high);
  console.log(' “lowValue”:' + low);
  console.log(' "bid":' + bid);
));






  

  
