const express = require('express');
const path = require('path');
const app = express();

const products = [
    { id: 1, name: 'Product 1' },
    { id: 2, name: 'Product 2' },
    { id: 3, name: 'Product 3' }
];

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page', products });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
