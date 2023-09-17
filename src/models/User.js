import { Schema, model } from "mongoose";
const User = new Schema(
  {
    username: {
      type: String,
      allowNull: true,
    },
    name: {
      type: String,
      allowNull: true,
    },
    password: {
      type: String,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

const user = model("User", User);

export {user}
