const dev = {
  app: {
    port: parseInt(process.env.DEV_APP_PORT) || 3000,
  },
  db: {
    host: process.env.DEV_DB_HOST || "localhost",
    port: parseInt(process.env.DEV_DB_PORT) || 27017,
    name: process.env.DEV_DB_NAME || "shop-web",
  },
};

const product = {
  app: { port: parseInt(process.env.PRODUCT_APP_PORT) || 3000 },
  db: {
    host: process.env.PRODUCT_DB_HOST || "localhost",
    port: parseInt(process.env.PRODUCT_DB_PORT) || 27017,
    name: process.env.PRODUCT_DB_NAME || "shop-web-product",
  },
};

const config = { dev, product };
const environment = process.env.NODE_ENV || "dev";
module.exports = config[environment];