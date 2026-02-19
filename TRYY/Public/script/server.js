const express = require('express');
const path = require('path');

const app = express();


// ✅ VERY IMPORTANT (fix main bug)
app.use(express.json());


// views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../views'));


// static files
app.use(express.static(path.join(__dirname, '../')));


// home page
app.get('/', (req, res) => {
    res.render('index');
});


// login route
app.post('/submit_form', (req, res) => {

    const { email, password } = req.body;
    console.log(req.body);

    console.log(email, password);

    res.json({
        message: "Login data received successfully!"
    });

});


const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
