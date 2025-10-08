const http = require('http');
const fs = require('fs');

const server = http.createServer((req , res)=>{
           console.log(req.method,  req.headers,req.url);
           
           if(req.url === '/'){
             res.setHeader('Content-Type','text/html');
             res.write('<html>');
             res.write('<head><title>Myntra</title></head>');
             res.write('<body><h1>Welcome to home</h1></body>')
             res.write('</html>');
               return res.end();
           }
           

           else  if(req.url === '/mens'){
             res.setHeader('Content-Type','text/html');
             res.write('<html>');
             res.write('<head><title>Myntra</title></head>');
             res.write('<body><h1>Welcome to Mens Section</h1></body>')
             res.write('</html>');
               return res.end();
           }



           else  if(req.url === '/womens'){
             res.setHeader('Content-Type','text/html');
             res.write('<html>');
             res.write('<head><title>Myntra</title></head>');
             res.write('<body><h1>Welcome to Womens Section</h1></body>')
             res.write('</html>');
               return res.end();
           }


            if(req.url === '/kids'){
             res.setHeader('Content-Type','text/html');
             res.write('<html>');
             res.write('<head><title>Myntra</title></head>');
             res.write('<body><h1>Welcome to Kids Section</h1></body>')
             res.write('</html>');
               return res.end();
           }
            if(req.url === '/cart'){
             res.setHeader('Content-Type','text/html');
             res.write('<html>');
             res.write('<head><title>Myntra</title></head>');
             res.write('<body><h1>Welcome to cart</h1></body>')
             res.write('</html>');
             return res.end();
           }


           res.setHeader("Content-Type","text/html");
           res.write('<html>');
           res.write('<head><title>Myntra</title></head>');
           res.write('<body>');
           res.write('<ul>');
           res.write('<li><a href = "/" >Home</a></li>');
           res.write('<li><a href = "/mens" >Mens</a></li>');
           res.write('<li><a href = "/womens" >Womens</a></li>');
           res.write('<li><a href = "/kids" >Kids</a></li>');
           res.write('<li><a href = "/cart" >Cart</a></li>');
           res.write('</ul>');
           res.write('</body>');
           res.write('</html>');
           res.end();

});

const PORT = 3001;
server.listen(PORT , ()=>{
          console.log(`Server is running on http://localhost:${PORT}`);
});