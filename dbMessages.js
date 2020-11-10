import mongoose from "mongoose";
const customerSchema = mongoose.Schema({
  name: String,
  email: String,
  phonenumber: String,
  profession: String,
});

export default mongoose.model("userdetails", customerSchema);
