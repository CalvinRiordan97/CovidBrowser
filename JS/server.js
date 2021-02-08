const http = require('http');
const https = require("https");

const options = {
	"method": "GET",
	"hostname": "covid-19-data.p.rapidapi.com",
	"port": null,
	"path": "/totals",
	"headers": {
		"x-rapidapi-key": "edea2c7a8dmsh7aff4654cd7da9ep1ef1e1jsne6e8838fb21c",
		"x-rapidapi-host": "covid-19-data.p.rapidapi.com",
		"useQueryString": true
	}
};

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello World!');

	if(req == "test"){
		console.log("test");
	}

	res.end();
  }).listen(8080);

// const req = http.request(options, function (res) {
// 	const chunks = [];

// 	res.on("data", function (chunk) {
// 		chunks.push(chunk);
// 	});

// 	res.on("end", function () {
// 		const body = Buffer.concat(chunks);
// 		console.log(body.toString());
// 	});
// });

// req.end();