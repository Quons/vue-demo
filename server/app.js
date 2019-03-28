const http = require('http');
const server = http.createServer();

server.on('request', function (req, res) {
  const url = req.url;
  if (url === '/getBrandList') {
    var brandList = {
      status: 99999,
      list: [{
          id: 1,
          name: "奔驰",
          cTime: new Date()
        },
        {
          id: 2,
          name: "宝马",
          cTime: new Date()
        },
        {
          id: 3,
          name: "别克",
          cTime: new Date()
        },
        {
          id: 4,
          name: "福特111",
          cTime: new Date()
        }
      ]
    };
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*"
    });
    res.end(JSON.stringify(brandList));
  } else if (url === '/addBrand') {
    console.log(req.JSON);
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*"
    });
    res.end("ok");
  } else {
    res.writeHead(200, {
      "Access-Control-Allow-Origin": "*"
    });
    res.end("404");
  }
});
server.listen(3000, function () {
  console.log('server listen at http://127.0.0.1:3000');
})
