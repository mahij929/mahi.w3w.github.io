const api = require("@what3words/api");


api.setOptions({ key: "D6COMFQX" });
api.convertTo3wa({lat:12.929430, lng: 77.547850})
  .then(data => console.log(data))
  .catch(function (error){
	  console.log(error.toString);
	console.log("[code]",error.code);
	console.log("[message]",error.message);
  });
