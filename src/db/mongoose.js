const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/definiens-api");

const User = mongoose.model("User", {
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
});

const lesson = mongoose.model("Lesson", {
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
});

// const me = new User({
//   username: "dylanjblack",
//   email: "something@something.com",
//   password: "something",
// });

// me.save()
//   .then(() => {
//     console.log(me);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
