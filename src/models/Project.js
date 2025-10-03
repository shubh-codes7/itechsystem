import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
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
    technologies: [
      {
        type: String,
        required: true,
      },
    ],
    image: {
      type: String, 
      required: false,
    },
    liveUrl: {
      type: String,
      default: "",
    },
    githubUrl: {
      type: String,
      default: "",
    },
    linkedIn: {
      type: String,
      default: "",
    },
    studentName: {
      type: String,
      required: true,
      trim: true,
    },
  }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
