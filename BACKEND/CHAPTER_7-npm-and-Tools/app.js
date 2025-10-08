const http = require('http');

const server = http.createServer((req,res)=>{
     console.log(req.method , req.url);
});


const PORT = 3002;
server.listen(PORT , ()=>{
     console.log(`Server is running at http://localhost:${PORT}`);
});
