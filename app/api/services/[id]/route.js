import { dbCollection, dbConnect } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
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
  const bookingCollection = dbConnect(dbCollection.bookingCollection);
  const query = { _id: new ObjectId(id) };
  const currentBooking = await bookingCollection.findOne(query);
  const session = await getServerSession();

  const verifyUser = session?.user?.email == currentBooking.customerEmail;
   if(verifyUser){
     const result = await bookingCollection.deleteOne(query);
      revalidatePath('/my-bookings')
     return NextResponse.json(result)
   }else{
     return NextResponse.json({success : false ,messaage : "Forbidden Actions"},{status : 401})
   }
};
