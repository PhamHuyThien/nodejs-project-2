const crypto = require("crypto-js");

let sha256 = crypto.SHA256;

let sha = sha256("PhamHuyThien").toString(crypto.enc.Hex);
console.log(`PhamHuyThien sha256 = ${sha}, env=${process.env.NODE_ENV}`);