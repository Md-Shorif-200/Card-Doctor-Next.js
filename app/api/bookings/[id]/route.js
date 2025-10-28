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
