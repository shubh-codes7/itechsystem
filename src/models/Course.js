import mongoose from "mongoose";

const ModuleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    topics: [String],
    projects: { type: Number },
  },
  { _id: false }
);

const ToolSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    icon: { type: String }
  },
  { _id: false }
);

const SeoSchema = new mongoose.Schema(
  {
    title: { type: String },
    description: { type: String }
  },
  { _id: false }
)

const CourseSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true},
    title: { type: String, required: true },
    image: { type: String, required: false},
    icon: { type: String, required: false},
    description: { type: String },
    why: { type: String, maxlength: 500 }, 
    modules: [ModuleSchema],
    tools: [ToolSchema],
    technologies: [String],
    seo: SeoSchema,
  },
  { timestamps: true }
);

export default mongoose.models.Course || mongoose.model("Course", CourseSchema);
