const express = require('express');
const app = express();
const api = require("@what3words/api");

api.setOptions({ key: "D6COMFQX" });

app.get('/LatLongToW3W', function (req, res) {
	console.log("Inside GET");
	let responseData
	api.convertTo3wa({lat:12.929430, lng: 77.547850})
  .then(data =>{
	  //res.end(data)
	  console.log("this is it")
	  res.send(data)
  }
	  )
  .catch(function (error){
	  console.log(error.toString());
	console.log("[code]",error.code);
	console.log("[message]",error.message);
  });
})
  
  
 var server = app.listen(8086, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Example app listening at http://%s:%s", host, port)
})