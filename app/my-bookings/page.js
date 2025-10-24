import { getServerSession } from "next-auth";
import authOptions from "@/lib/authOptions";
import { dbConnect, dbCollection } from "@/lib/mongodb";
import MyBookings from "@/Pages/Service/MyBookings";

export default async function Page() {
  const session = await getServerSession(authOptions);

  if (!session) {
    return <div className="text-center mt-10">Please log in to see your bookings.</div>;
  }

  const email = session.user.email;
  const bookingCollection = dbConnect(dbCollection.bookingCollection);
  const bookings = await bookingCollection.find({ customerEmail: email }).toArray();

  console.log("my bookings", bookings);

  return <MyBookings data={bookings} />;
}
