import { Schema, model } from "mongoose";
const User = new Schema(
  {
    username: {
      type: String,
      allowNull: false,
    },
    name: {
      type: String,
      allowNull: false,
    },
    password: {
      type: String,
      allowNull: false,
    },
  },
  {
    timestamps: true,
  }
);

const user = model("User", User);

export { user };

//Functions

export async function createUser(body) {
  const users = new user(body);
  await users.save();

  return users
}
