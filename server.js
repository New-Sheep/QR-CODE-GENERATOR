const express = require('express');
const qrcode = require('qrcode');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.post('/generateQR', async (req, res) => {
    try {
        const { text } = req.body;

        if (!text || text.length !== 6) {
            return res.status(400).json({ error: 'Input must be a 6 character string' });
        }

        // Implementation for generating QR codes
    } catch (error) {
        return res.status(500).json({ error: 'An error occurred' });
    }
});

const qrImagePath = path.join(__dirname, 'qr_images', `${text}.png`);
await qrcode.toFile(qrImagePath, text);
return res.json({ imagePath: qrImagePath });

app.get('/getQR/:filename', (req, res) => {
    const { filename } = req.params;
    const qrImagePath = path.join(__dirname, 'qr_images', filename);

    if (fs.existsSync(qrImagePath)) {
        res.sendFile(qrImagePath);
    } else {
        res.status(404).json({ error: 'QR image not found' });
    }
});


