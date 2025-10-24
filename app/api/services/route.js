import { dbCollection, dbConnect } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export const POST  = async (req) => {
     const body = await req.json();
     const result = await dbConnect(dbCollection.bookingCollection).insertOne(body);

     return NextResponse.json(result)
}