import mongoose from "mongoose";

const SeoSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String }
  },
  { _id: false }
)

const solutionSchema = new mongoose.Schema(
  {
    slug: { 
      type: String, 
      required: true, 
      unique: true 
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    icon: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    features: [
      {
        type: String,
        required: true,
      },
    ],
    seo: SeoSchema,
  },
  {
    timestamps: true,
  }
);

const Solution =
  mongoose.models.Solution || mongoose.model("Solution", solutionSchema);

export default Solution;
