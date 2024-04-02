const keytokenModel = require("../models/keytoken.model");

class KeyTokenService {

    static createKeyToken =  async ({userId, publicKey}) => {
        try {
            // publicKey has type is Buffer -> should convert to string
            const publicKeyString = publicKey.string()
            const tokens = await keytokenModel.create({user: userId, publicKey: publicKeyString});

            return tokens ? publicKeyString : null;
        } catch (error) {
            return error
        }
    }
}

module.exports = KeyTokenService;