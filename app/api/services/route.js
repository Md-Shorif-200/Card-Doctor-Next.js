import { dbCollection, dbConnect } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  const data = await req.json();
  const serviceCollection = dbConnect(dbCollection.Services);
  const result = await serviceCollection.insertOne(data);
  return NextResponse.json(result);
};

export const GET = async (req) => {
  const serviceCollection = dbConnect(dbCollection.Services);

  const result = await serviceCollection.find({}).toArray();

  return NextResponse.json(result);
};


