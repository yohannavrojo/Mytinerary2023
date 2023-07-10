const mongoose = require("mongoose")

mongoose.connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  })

  .then(() => console.log("Base de datos conectadas"))
  .catch((error => console.error(error)))