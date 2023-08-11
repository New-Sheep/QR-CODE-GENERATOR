const qrcode = require('qrcode');
const generateFilePath = require('../util/pathUtil');

const generateQRCode = async (data, filename) => {
    const qrImagePath = generateFilePath('qr_images', filename + '.png');
    await qrcode.toFile(qrImagePath, data);
    return qrImagePath;
};

module.exports = generateQRCode;