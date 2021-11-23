const mongoose = require("mongoose");

const MONGODB_URI="mongodb+srv://arimagic:_B4ggerm4N_@cluster0.h4hh5.mongodb.net/adventCalendar?retryWrites=true&w=majority"

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((x) => {
    console.log(`Connected to Mongo!`);
  })
  .catch((err) => {
    console.error("Error connecting to mongo", err);
  });
