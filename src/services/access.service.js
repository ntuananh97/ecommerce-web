const shopModel = require("../models/shop.model");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const KeyTokenService = require("./keyToken.service");

const SHOP_ROLES = { SHOP: "SHOP", WRITER: "WRITER", EDITOR: "EDITOR", ADMIN: "ADMIN" };

class AccessService {
  static signUp = async ({ name, email, password }) => {
    // Your logic here
    try {
      // Step1: Check if the email already exists

      const hodelShop = await shopModel.findOne({ email }).lean();
      // .lean() is used to get the plain object instead of mongoose document

      if (hodelShop) {
        return {
          code: "xxxx",
          message: "Shop already exists",
        };
      }

      const passwordHash = await bcrypt.hash(password, 10);
      const newShop = new shopModel.create({
        name,
        email,
        password: passwordHash,
        roles: [SHOP_ROLES.SHOP],
      });

      // Allow the user to login after sign up
      if (newShop) {
        
        // create privateKey (send to user, not save in db)
        // publicKey (save in db, verify token)
        const { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
            modulusLength: 4096,
        });

        console.log("privateKey", privateKey, publicKey); // save collection keyStore

        const publicKeyString = await KeyTokenService.createKeyToken({userId: newShop._id, publicKey});

        if (!publicKeyString) {
          return {
            code: "xxxx",
            message: "Create key token failed",
          };
        }

        // const tokens  
      }

    } catch (error) {
      return {
        code: "xxx",
        message: error.message,
        status: "error",
      };
    }
  };
}

module.exports = AccessService;
