const express = require('express');
const qrcode = require('qrcode');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/generateQR', async (req, res) => {
    // Implementation for generating QR codes
});

