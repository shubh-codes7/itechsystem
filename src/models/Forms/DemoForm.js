import mongoose from "mongoose";

const DemoFormSchema = mongoose.Schema(
  {
    name: String,
    mobile: String,
    email: String,
    course: String,
  },
  { timestamps: true }
);

export default mongoose.models.DemoForm ||
  mongoose.model("DemoForm", DemoFormSchema);
