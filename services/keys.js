const { generateKeyPairSync } = require('crypto');

const {
    publicKey,
    privateKey,
} = generateKeyPairSync('rsa', {
    modulusLength: 4096,
    publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem'
    }
});

module.exports = { publicKey, privateKey };