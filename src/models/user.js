const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.methods.matchPassword = async function (password)  {
  return await bcrypt.compare(password, this.password);
};

module.exports = model("User", userSchema);
