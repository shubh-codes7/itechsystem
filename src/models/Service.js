import mongoose from "mongoose";

const SeoSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String }
  },
  { _id: false }
)

const ServiceSchema = mongoose.Schema({
  slug: { type: String, required: true, unique: true },
  title : String,
  shortDescription: String,
  fullDescription: String,
  icon: String,
  category: String,
  features: [String],
  benefits: [String],
  technologies: [String],
  seo: SeoSchema,
})

export default mongoose.models.Service || mongoose.model("Service", ServiceSchema);