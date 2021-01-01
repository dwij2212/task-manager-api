const mongoose = require("mongoose");

const connectionURL =
  "mongodb+srv://root:root@cluster0.ddaai.mongodb.net/task-manager-api?retryWrites=true&w=majority";

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
