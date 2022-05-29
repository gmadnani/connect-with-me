const { Schema, model } = require("mongoose");
// Package for validating email address
const validator = require("validator");

// User model
const userSchema = new Schema(
  {
    username: { type: String, unique: true, required: true, trim: true },
    email: { type: String, unique: true, required: true, trim: true, validate: [validator.isEmail, "email address not valid"] },
    thoughts: [
      { type: Schema.Types.ObjectId, ref: "Thoughts" },
    ],
    friends: [
      { type: Schema.Types.ObjectId, ref: "Users" },
    ],
  },
  {
    // Virtuals enabled for friend count
    toJSON: { virtuals: true,},
  }
);

// Virtual for friend count
userSchema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// User model init
const User = model("user", userSchema);

module.exports = User;