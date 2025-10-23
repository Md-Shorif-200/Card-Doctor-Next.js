"use server";
import bcrypt from "bcrypt";
import { dbCollection, dbConnect } from "@/lib/mongodb";

export default async function signInVerify( data ) {
  const { email, password } = data;
   console.log(data);
   
  const user = await dbConnect(dbCollection.UserCollection).findOne({ email });
  if (!user) return null;

  const isPasswordOk = await bcrypt.compare(password,user.password);
  if (!isPasswordOk) return null;

  return user;
}
