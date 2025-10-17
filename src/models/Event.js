import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String },
    startDate: { type: Date, required: true },
    duration: { type: String },
    time: { type: String },
    mode: { type: String },
    price: { type: String },
    instructor: { type: String },
    tags: { type: [String] },
  },
  { timestamps: true }
);

const Event = mongoose.models.Event || mongoose.model("Event", EventSchema);
export default Event;
