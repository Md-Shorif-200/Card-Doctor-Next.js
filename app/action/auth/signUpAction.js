"use server";

import bcrypt from "bcrypt";
import { dbCollection, dbConnect } from "@/lib/mongodb";


const signUpAction = async (prevState, formData) => {
  try {
    const { name, email, password } = Object.fromEntries(formData.entries());

    if (!name || !email || !password) {
      return { error: "All fields are required." };
    }

    const UserCollection = dbConnect(dbCollection.UserCollection);

    const existingUser = await UserCollection.findOne({ email });
    if (existingUser) {
      return { error: "User already exists. Please log in instead." };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await UserCollection.insertOne({
      name,
      email,
      password: hashedPassword,
    });

    if (!result?.insertedId) {
      return { error: "Something went wrong. Please try again." };
    }

    return {result,email,password};

  } catch (error) {
    console.error(" SignUp Error:", error);


    if (error.message?.includes("ECONNREFUSED")) {
      return { error: "Database connection failed. Please try again later." };
    }

    return {
      error: error.message || "Unexpected error occurred during sign up.",
    };
  }
};

export default signUpAction;
