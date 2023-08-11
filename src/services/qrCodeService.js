const qrcode = require('qrcode');
const generateFilePath = require('../util/pathUtil');

async function generateQRCode(data, filename) {
    try {
        const qrImagePath = generateFilePath('qr_images', filename + '.png');
        await qrcode.toFile(qrImagePath, data);
        return qrImagePath;
    } catch (error) {
        throw new Error('QR code generation failed');
    }
}

module.exports = generateQRCode;