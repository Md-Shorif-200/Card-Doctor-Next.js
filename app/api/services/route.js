import authOptions from "@/lib/authOptions";
import { dbCollection, dbConnect } from "@/lib/mongodb";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  const session = await getServerSession(authOptions);
  if (session) {
    const email = session?.user?.email;
          console.log(email);
          
    const bookingCollection = dbConnect(dbCollection.bookingCollection);
    const result = await bookingCollection.find({ customerEmail : email }).toArray();
    console.log(result);

    return NextResponse.json(result);
  }

  return  NextResponse.json({})
};

export const POST = async (req) => {
  const body = await req.json();
  const result = await dbConnect(dbCollection.bookingCollection).insertOne(
    body
  );

  return NextResponse.json(result);
};
