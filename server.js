const express = require('express');
const app = express();
const port = process.env.PORT || 3009;


app.get('/src/App.js', (req, res) => {
   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.listen(port, () => {
   console.log('Server is up!');
});