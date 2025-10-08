import mongoose from "mongoose";

const EnqFormSchema = mongoose.Schema(
  {
    name: String,
    mobile: String,
    message: String,
    requirement: String,
  },
  { timestamps: true }
);

export default mongoose.models.EnqForm ||
  mongoose.model("EnqForm", EnqFormSchema);
