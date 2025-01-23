const crypto = require('crypto');
const bcrypt = require('bcryptjs');

async function AesEncryption(text, aeskey) {
    const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(aeskey), Buffer.alloc(16, 0));
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

async function AesDecryption(encrypted, aeskey) {
    const decipher = crypto.createDecipheriv('aes-256-cbc', Buffer.from(aeskey), Buffer.alloc(16, 0));
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

async function CamelliaEncryption(text, getkey) {
    const cipher = crypto.createCipheriv('camellia-256-cbc', Buffer.from(getkey), Buffer.alloc(16, 0));
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

async function CamelliaDecryption(encrypted, getkey) {
    const decipher = crypto.createDecipheriv('camellia-256-cbc', Buffer.from(getkey), Buffer.alloc(16, 0));
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

async function ShaEncryption(text) {
    return crypto.createHash('sha256').update(text).digest('hex');
}

async function Md5Encryption(text) {
    return crypto.createHash('md5').update(text).digest('hex');
}

async function RipemdEncryption(text) {
    return crypto.createHash('ripemd160').update(text).digest('hex');
}

async function BcryptEncryption(text) {
    const saltRounds = 10;
    return await bcrypt.hash(text, saltRounds);
}

module.exports = { 
    AesEncryption, 
    AesDecryption, 
    CamelliaEncryption, 
    CamelliaDecryption, 
    ShaEncryption, 
    Md5Encryption, 
    RipemdEncryption, 
    BcryptEncryption
};