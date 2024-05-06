import Layout from '@/components/Layout'
import Nav2 from "@/components/Nav2"
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"

export default function admin() {

    const invoices = [
        {
            invoice: "INV001",
            paymentStatus: "Paid",
            totalAmount: "$250.00",
            paymentMethod: "Credit Card",
        },
        {
            invoice: "INV002",
            paymentStatus: "Pending",
            totalAmount: "$150.00",
            paymentMethod: "PayPal",
        },
        {
            invoice: "INV003",
            paymentStatus: "Unpaid",
            totalAmount: "$350.00",
            paymentMethod: "Bank Transfer",
        },
        {
            invoice: "INV004",
            paymentStatus: "Paid",
            totalAmount: "$450.00",
            paymentMethod: "Credit Card",
        },
        {
            invoice: "INV005",
            paymentStatus: "Paid",
            totalAmount: "$550.00",
            paymentMethod: "PayPal",
        },
        {
            invoice: "INV006",
            paymentStatus: "Pending",
            totalAmount: "$200.00",
            paymentMethod: "Bank Transfer",
        },
        {
            invoice: "INV007",
            paymentStatus: "Unpaid",
            totalAmount: "$300.00",
            paymentMethod: "Credit Card",
        },
    ]

    const users = [
        { id: 1, name: "John Doe", email: "john.doe@example.com" },
        { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
        { id: 3, name: "Michael Chen", email: "michael.chen@example.com" },
      ];

    return (
        <div className='flex'>
            <div className="w-[22vw] text-white px-4 py-8 flex-shrink-0">
                <Layout />
            </div>
            <div className="flex-grow mt-4 flex flex-col justify-content-end">
                <div>
                    <Nav2 />
                </div>
                <div>
                    <h1 className='text-4xl p-4 font-bold'>Users</h1>
                </div>
                <Table className='bg-slate-300 w-[77vw]'>
                        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                        <TableHeader className='bg-gray-500'>
                            <TableRow>
                                <TableHead className="w-[100px]">No</TableHead>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                {/* <TableHead className="text-right">Amount</TableHead>
                                <TableHead className="text-right">Action</TableHead> */}
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {users.map((user) => (
                                <TableRow key={user.id}>
                                    <TableCell className="font-medium">{user.id}</TableCell>
                                    <TableCell>{user.name}</TableCell>
                                    <TableCell>{user.email}</TableCell>
                                    {/* <TableCell className="text-right">{.totalAmount}</TableCell>
                                    <TableCell className="text-right">
                                        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
                                            View
                                        </button>
                                    </TableCell> */}
                                </TableRow>
                            ))}
                        </TableBody>
                        {/* <TableFooter>
                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell className="text-right">$2,500.00</TableCell>
                            </TableRow>
                        </TableFooter> */}
                    </Table>
            </div>
        </div>
    )
}