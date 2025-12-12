const http = require('http');

const server = http.createServer((req,res)=>{
   console.log(req.url,req.method,req.headers);

   if(req.url === '/'){
   res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>Rendering web Page</title></head>');
   res.write('<body><h1>Welcome to Divine Collections</h1></body>')
   res.write('</html>');
   return res.end();
   }

   else if(req.url === '/products'){
      res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>Rendering web Page</title></head>');
   res.write('<body><h1>Divine attires for Radha Krishna Dieties</h1></body>')
   res.write('</html>');
   return res.end();
   }

   res.setHeader('Content-Type','text/html');
   res.write('<html>');
   res.write('<head><title>Rendering web Page</title></head>');
   res.write('<body><h1>Radhe Shyam!!!!</h1></body>')
   res.write('</html>');
   res.end();

//    process.exit(); //end the process
});

const PORT = 3001;
server.listen(PORT,()=>{
     console.log(`Server is running on http://localhost:${PORT}`);
});

