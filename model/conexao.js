const mongoose = require("mongoose");

const uri = "mongodb+srv://projeto:projeto@cluster0.rl39q.mongodb.net/anime";

mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.set("useFindAndModify", false);

module.exports = mongoose;