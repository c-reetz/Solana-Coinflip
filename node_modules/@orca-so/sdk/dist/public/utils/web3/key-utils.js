"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Owner = void 0;
class Owner {
    constructor(owner) {
        this._owner = owner;
    }
    get publicKey() {
        if (Owner.isKeyPair(this._owner)) {
            return this._owner.publicKey;
        }
        return this._owner;
    }
    get signer() {
        return Owner.isKeyPair(this._owner) ? this._owner : undefined;
    }
    get isKeyPair() {
        return Owner.isKeyPair(this._owner);
    }
    get isPublicKey() {
        return Owner.isPublicKey(this._owner);
    }
    static isKeyPair(owner) {
        return owner.secretKey !== undefined;
    }
    static isPublicKey(owner) {
        return !Owner.isKeyPair(owner);
    }
}
exports.Owner = Owner;
