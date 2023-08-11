const express = require('express');
const bodyParser = require('body-parser');
const generateQRRoute = require('./routes/generateQR');
const getQRRoute = require('./routes/getQR');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/generateQR', generateQRRoute);
app.use('/getQR', getQRRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});