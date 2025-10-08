const express = require('express');
const path = require('path');
const userRouter = require('./routes/userRouter');
const hostRouter = require('./routes/hostRouter');

const app = express();


app.use(express.urlencoded());
app.use(userRouter);
app.use("/host",hostRouter);

app.use((req,res,next)=>{
        res.sendFile(path.join(__dirname,'views',"404.html"));
})

const PORT = 3001;
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);

});