"use server";
import bcrypt from "bcrypt";
import { dbCollection, dbConnect } from "@/lib/mongodb";

const signUpAction = async (formData) => {
  const { name, email, password } = Object.fromEntries(formData.entries());

  if ((!email, !password)) return null;

  const UserCollection = dbConnect(dbCollection.UserCollection);
  const user = await UserCollection.findOne({ email });

  if (!user) {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await UserCollection.insertOne({
      name,
      email,
      password: hashedPassword,
    });
    //   console.log(result);
    result.insertedId = result.insertedId.toString()


    return result
  }

  return null;
};

export default signUpAction;
