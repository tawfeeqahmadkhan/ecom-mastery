import mongoose from "mongoose";

const User =  mongoose.models.User ||

mongoose.model("User", {
  fullName: String,
  username: String,
  email: String,
  password: String,
});

export default User