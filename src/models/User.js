import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userScehma = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userScehma.pre("save", function (next) {
  const user = this;
  const SALT = bcrypt.genSaltSync(9);
  const encryptedPassword = bcrypt.hashSync(user.password, SALT);
  user.password = encryptedPassword;
  next();
});

userScehma.methods.comparePassword = function compare(password) {
  return bcrypt.compareSync(password, this.password);
};

userScehma.methods.genJWT = function generate() {
  return jwt.sign({ id: this._id, email: this.email }, "twitter_secret", {
    expiresIn: "1h",
  });
};

const User = mongoose.model("User", userScehma);

export default User;
