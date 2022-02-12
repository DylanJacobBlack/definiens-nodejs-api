const mongoose = require("mongoose");
const validator = require("validator")

mongoose.connect("mongodb://127.0.0.1:27017/definiens-api");

const User = mongoose.model("User", {
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid")
      }
    }
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

const me = new User({
  username: "mariebyleen",
  email: "something@",
  password: "something",
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((e) => {
    console.log(e);
  });
