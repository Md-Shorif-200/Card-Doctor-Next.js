import { dbCollection, dbConnect } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const PATCH =  async (req,{params}) => {
     const id = await params.id;
     const bookingCollection = dbConnect(dbCollection.bookingCollection);
     const query =  {_id : new ObjectId(id)};
     const body = await req.json();
     const filter = {
        $set :  {...body}
     }
     const option = {
        upsert : true
     }

     const result = await bookingCollection.updateOne(query,filter,option);
     revalidatePath('/my-bookings')
     return NextResponse.json(result)
}
