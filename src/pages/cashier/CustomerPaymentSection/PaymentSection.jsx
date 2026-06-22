import { Button } from '@/components/ui/button'
import { CreditCard, Pause } from 'lucide-react'
import React, { useState } from 'react'
import { PaymentDialog } from './PaymentDialog'
import { useDispatch } from 'react-redux'
import { holdOrder } from '@/ReduxToolkit/feature/Cart/cartSlice'

const cartItems = [1];


export const PaymentSection = () => {
  const [showPaymentDialog, setShowPaymentDialog] = useState(false)
  const dispatch = useDispatch();
  const handleHoldOrder = () => {
    dispatch(holdOrder());
    // setShowPaymentDialog(false);
  }

  return (
    <div className='flex flex-1 flex-col p-4 justify-end'>
      <div className='space-y-4'>
        <div className='text-center'>
          <h1 className='text-3xl font-bold text-green-600 dark:text-green-400'>
            {899}$
          </h1>
          <p className='text-sm text-muted-foreground'>
            Total Amount
          </p>

        </div>
        <div className=''>
          <div className='mb-3'>
            <Button onClick={() => setShowPaymentDialog(true)}
              disabled={cartItems.length === 0}
              className='w-full py-3 text-lg font-semibold'>
              <CreditCard className='w-5 h-5 mr-2' />
              Process Payment
            </Button>
          </div>
          <div>
            <Button
              onClick={handleHoldOrder}
              variant='outline'
              disabled={cartItems.length === 0}
              className='w-full py-3 text-lg font-semibold'>
              <Pause className='w-5 h-5 mr-2'></Pause>
              Hold Order
            </Button>
          </div>

        </div>
        <PaymentDialog
          showPaymentDialog={showPaymentDialog}
          setShowPaymentDialog={setShowPaymentDialog} />

      </div>
    </div>
  )
}
