import { Card, CardContent } from '@/components/ui/card';
import React from 'react'

const shiftData = {
  cashier: {
    fullName: "Jane Doe",

  },
  shiftStart: "Aug 8, 2025, 8:30 am",
  // shiftEnd: "Ongoing",
  duration: "8 hours",
  totalOrders: 59,
  totalSales: 69309887,
  totalRefunds: 2199,
  netSales: 43000
}

const SalesSummaryCard = () => {
  return (
    <Card>
      <CardContent>
        <h2 className='text-xl font-semibold mb-4'>
          Sales Summary
        </h2>
        <div className='space-y-2'>
          <div className='flex justify-between'>
            <span className='text-muted-foregroud'>Total order: </span>
            <span className='font-medium'>{shiftData.totalOrders}</span>
          </div>

          <div className='flex justify-between'>
            <span className='text-muted-foregroud'>Shift sales: </span>
            <span className='font-medium text-green-500'>${shiftData.totalSales}</span>
          </div>

          <div className='flex justify-between'>
            <span className='text-muted-foregroud'>Total Refund: </span>
            <span className='font-medium text-red-500'>-${shiftData.totalRefunds}</span>
          </div>

          <div className='flex justify-between border-t'>
            <span className='text-muted-foregroud'>Net Sales: </span>
            <span className='font-medium'>${shiftData.netSales}</span>
          </div>


        </div>
      </CardContent>
    </Card>
  )
}
export default SalesSummaryCard;