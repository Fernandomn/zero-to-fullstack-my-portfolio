const mongoose = require("mongoose");

try {
  mongoose.connect(process.env.MONGO_URL_CONNECT);
  console.log("conectado ao MongoDB");
} catch (error) {
  console.error(error);
}
