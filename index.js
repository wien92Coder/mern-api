const express = require('express');

const app = express();

app.use(() => {
    console.log('hello server');
    console.log('hello lagi');
})

app.listen(4000);