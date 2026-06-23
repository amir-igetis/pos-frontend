import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import React from 'react'
import { useSelector } from 'react-redux';

const shiftData = {
  recentOrders: [
    {
      id: 1,
      createdAt: "01:25 PM",
      paymentType: "CASH",
      totalAmount: 7899
    },
    {
      id: 2,
      createdAt: "03:25",
      paymentType: "CARD",
      totalAmount: 14899
    }
  ]
}

const RecentOrdersTable = () => {

  const shiftData = useSelector(state => state.shiftReport?.currentShift);


  return (
    <Card>
      <CardContent>
        <h2 className='text-xl font-semibold mb-4'>
          Recent Orders
        </h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Order Id</TableHead>
              <TableHead className="w-[150px]">Time</TableHead>
              <TableHead className="w-[100px]">Payment</TableHead>
              <TableHead className="text-right">Amount</TableHead>

            </TableRow>
          </TableHeader>
          <TableBody>
            {shiftData?.recentOrders?.map((order) => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.createdAt}</TableCell>
                <TableCell>{order.paymentType}</TableCell>
                <TableCell className="text-right">$ {order.totalAmount}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}

export default RecentOrdersTable;