import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { getOrderByCashier } from '@/ReduxToolkit/feature/Order/orderThunk'
import { EyeIcon, Printer } from 'lucide-react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const orders = [
    {
        id: 1,
        createdAt: "Jul 8, 2025, 12:37 PM",
        customer: {
            fullName: "Jimmy Changa",
            phone: "2099187471"
        },
        totalAmount: 2999,
        paymentType: "CASH",
        orderStatus: "COMPLETED",
        items: [
            {
                id: 2,
                product: {
                    image: "https://static.vecteezy.com/system/resources/thumbnails/000/226/407/small/646.jpg",
                    name: "Men Black T-Shirt",
                    sellingPrice: 4999,
                    sku: "SHRT-S-COTTON-BLK-2025"
                },
                quantity: 2,
            }
        ]
    }
]

const OrderTable = ({ handleViewOrderDetails }) => {
    const { orders } = useSelector(state => state.order);
    const dispatch = useDispatch();
    const { userProfile } = useSelector(state => state.user);

    useEffect(() => {
        if (userProfile?.id) {
            dispatch(getOrderByCashier(userProfile.id))
        }
    }, [userProfile])

    return (
        <div>
            <h2 className='text-xl font-bold mb-4'>
                Recent Orders
            </h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className="">Order Id</TableHead>
                        <TableHead className="">Date/Time</TableHead>
                        <TableHead className="">Customer</TableHead>
                        <TableHead className="">Amount</TableHead>
                        <TableHead className="">Payment Type</TableHead>
                        <TableHead className="">Status</TableHead>
                        <TableHead className="text-right">Action</TableHead>

                    </TableRow>
                </TableHeader>
                <TableBody>
                    {orders.map((order) => (
                        <TableRow key={order.id}>
                            <TableCell>{order.id}</TableCell>
                            <TableCell>{order.createdAt}</TableCell>
                            <TableCell>{order.customer?.fullName}</TableCell>
                            <TableCell>{order.totalAmount}</TableCell>
                            <TableCell>{order.paymentType}</TableCell>
                            <TableCell>{order.orderStatus}</TableCell>
                            <TableCell className="text-right">
                                <div className='flex justify-end gap-2'>
                                    <Button onClick={
                                        () => handleViewOrderDetails(order)
                                    } variant={"ghost"} size={'icon'}>
                                        <EyeIcon className='h-4 w-4 ' />
                                    </Button>
                                    <Button variant={"ghost"} size={'icon'}>
                                        <Printer className='h-4 w-4 ' />
                                    </Button>
                                </div>
                            </TableCell>

                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default OrderTable