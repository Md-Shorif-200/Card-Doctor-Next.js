import { dbCollection, dbConnect } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export const GET  = async (req,{params}) => {
    console.log(params);
 const serviceId = await params.id;

  const serviceDetailsData = await dbConnect(dbCollection.Services).findOne({
    _id: new ObjectId(serviceId),
  });

  return NextResponse.json(serviceDetailsData)
    
}