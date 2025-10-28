
import All_Service_Action from "@/Comonents/Admin/All_Service_Action";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image";




export default function Component({servicesData}) {
   console.log(servicesData);
   
  return (
    <div>
      <div className="overflow-hidden rounded-md border bg-background">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted/50">
              <TableHead className="h-9 text-lg py-2">Sl</TableHead>
              <TableHead className="h-9 text-lg py-2"></TableHead>
              <TableHead className="h-9 text-lg py-2">Title</TableHead>
              <TableHead className="h-9 text-lg py-2">Price</TableHead>
              <TableHead className="h-9 text-lg py-2">Action</TableHead>
       
           
            </TableRow>
          </TableHeader>
          <TableBody>
            {servicesData?.map((service,index) => (
              <TableRow key={service?._id}>
                <TableCell className="py-2 font-medium">
                  {index+1}
                </TableCell>
                <TableCell className="py-2">
                  <Image src={service?.service_image} alt="service image" width={60}  height={60} className="rounded-md" ></Image>
                </TableCell>
                <TableCell className="py-2 text-lg">{service.title}</TableCell>
                <TableCell className="py-2 text-lg">{service.price}</TableCell>

                <TableCell className="py-2 " >
                  <All_Service_Action service={service}></All_Service_Action>
                </TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Dense table
      </p>
    </div>
  );
}
