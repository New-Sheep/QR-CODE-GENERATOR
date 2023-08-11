const express = require('express');
const fs = require('fs');
const generateFilePath = require('../util/pathUtil');
const handleError = require('../util/errorUtil');
const logger = require('../util/logger');

const router = express.Router();

router.get('/:filename', (req, res) => {
    try {
        const { filename } = req.params;
        const qrImagePath = generateFilePath('qr_images', filename);

        if (fs.existsSync(qrImagePath)) {
            logger(`Fetched QR image: ${filename}`);
            res.sendFile(qrImagePath);
        } else {
            handleError(res, 404, 'QR image not found');
        }
    } catch (error) {
        handleError(res, 500, 'An error occurred');
    }
});

module.exports = router;