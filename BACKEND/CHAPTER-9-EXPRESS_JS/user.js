const fs= require('fs');
const path = require('path');
const dirname = __dirname;
console.log(dirname);
const filePath = path.join(__dirname,'user2.txt');

const requestHandler = ((req,res)=>{
     console.log(req.url, req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Rendering web Page</title></head>");
    res.write("<body><h1>Enter your details</h1>");
    res.write('<form action="/submit-details"method="POST">');
    res.write(
      '<input type="text" id="name" name = "name"placeholder="Enter your name"><br><br>'
    );
    res.write('<label for ="gender">Gender: </label>');
    res.write('<input type="radio" id="male" name ="gender" value ="Male">');
    res.write('<label for ="male">Male</label>');
    res.write(
      '<input type="radio" id="female" name ="gender" value ="Female">'
    );
    res.write('<label for ="female">Female</label><br><br>');
    res.write('<button type ="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);

      const params = new URLSearchParams(parseBody);
      const bodyObj = {};

      for (const [key, value] of params.entries()) {
        bodyObj[key] = value;
      }
      console.log(bodyObj);

      fs.writeFile(filePath, JSON.stringify(bodyObj), (error) => {
        if (error) {
          console.error("Error writing file:", error);
          res.statusCode = 500; // Internal Server Error
          res.setHeader("Content-Type", "text/html");
          res.write("<h1>Something went wrong!</h1>");
          return res.end();
        }

        console.log("Data written Successfully");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Rendering web Page</title></head>");
    res.write("<body><h1>Radhe Shyam!!!!</h1></body>");
    res.write("</html>");
    res.end();
  }
});

module.exports = requestHandler;