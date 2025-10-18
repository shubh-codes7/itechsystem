import mongoose from "mongoose";

const PlacementSchema = new mongoose.Schema(
  {
    name: String,
    role: String,
    company: String,
    course: String
  }
);

const Placement = mongoose.models.Event || mongoose.model("Placement", PlacementSchema);
export default Placement;