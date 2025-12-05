const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
    res.setHeader("Content-Type","text/html");
    res.write('<h1 style="color: blue;">Welcome to the Page</h1>');
    res.end();
    }
});

const PORT = 9999;
server.listen(PORT , ()=>{
        console.log(`Server is running on http://localhost:${PORT}`);
});