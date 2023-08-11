const path = require('path');

const generateFilePath = (folder, filename) => {
    return path.join(__dirname, '..', '..', folder, filename);
};

module.exports = generateFilePath;

