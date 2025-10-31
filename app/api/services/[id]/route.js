import { dbCollection, dbConnect } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (req, { params }) => {
  console.log(params);
  const serviceId = await params.id;

  const serviceDetailsData = await dbConnect(dbCollection.Services).findOne({
    _id: new ObjectId(serviceId),
  });

  return NextResponse.json(serviceDetailsData);
};

export const DELETE = async (req, { params }) => {
  const id = await params.id;
  const serviceCollection = dbConnect(dbCollection.Services);
  const query = { _id: new ObjectId(id) };
  // const currectServiceData = await serviceCollection.findOne(query);

  const result = await serviceCollection.deleteOne(query);
  revalidatePath("/all-service");

  return NextResponse.json(result);
};

export const PATCH = async (req, { params }) => {
   console.log(params);
   
  const id =  params.id;
  const serviceCollection = dbConnect(dbCollection.Services);
  const query = { _id: new ObjectId(id) };
  const body = await req.json();
  const filter = {
    $set: { ...body },
  };
  const option = {
    upsert: true,
  };

  const result = await serviceCollection.updateOne(query,filter,option);
  revalidatePath('/all-service')
  return NextResponse.json(result)
};


