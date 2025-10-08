const http = require('http');
const requestHandler = require('./app');

const server = http.createServer(requestHandler);

const PORT = 3001;
server.listen(PORT , ()=>{
          console.log(`Server is running on http://localhost:${PORT}`);
});