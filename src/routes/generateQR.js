const express = require('express');
const generateQRCode = require('../services/qrCodeService');
const handleError = require('../util/errorUtil');
const logger = require('../util/logger');

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const { text } = req.body;
        if (!text || text.length !== 6) {
            return handleError(res, 400, 'Input must be a 6 character string');
        }

        const qrImagePath = await generateQRCode(text, text);
        logger(`Generated QR code for: ${text}`);
        res.json({ imagePath: qrImagePath });
    } catch (error) {
        handleError(res, 500, 'An error occurred');
    }
});

module.exports = router;