const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(data) {
        this.nonce = 0;
        this.index = 0;
        this.zero_count = 3;
        this.timestamp = new Date();
        this.data = data;
        this.previousHash = "0";
        this.hash = this.calculateHash();
    }

    calculateHash() {
        const hash = SHA256(this.index + this.previousHash + this.timestamp + JSON.stringify(this.data) + this.nonce + this.zero_count).toString();
        var chars = hash.split('')
        if (this.zero_count == 1) {
            if (chars[0] == '0') {
                return hash
            }
        }
        if (this.zero_count == 2) {
            if (chars[0] == '0') {
                if (chars[1] == '0') {
                    return hash
                }
            }
        }
        if (this.zero_count == 3) {
            if (chars[0] == '0') {
                if (chars[1] == '0') {
                    if (chars[2] == '0') {
                        return hash
                    }
                }
            }
        }
        if (this.zero_count == 4) {
            if (chars[0] == '0') {
                if (chars[1] == '0') {
                    if (chars[2] == '0') {
                        if (chars[3] == '0') {
                            return hash
                        }
                    }
                }
            }
        }
        if (this.zero_count == 5) {
            if (chars[0] == '0') {
                if (chars[1] == '0') {
                    if (chars[2] == '0') {
                        if (chars[3] == '0') {
                            if (chars[4] == '0') {
                                return hash
                            }
                        }
                    }
                }
            }
        }
        this.nonce++
        return this.calculateHash()
    }
}

module.exports = Block;