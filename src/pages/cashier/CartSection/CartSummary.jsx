import { Separator } from '@/components/ui/separator'
import { selectSubTotal, selectTax, selectTotal } from '@/ReduxToolkit/feature/Cart/cartSlice';
import React from 'react'
import { useSelector } from 'react-redux'

export const CartSummary = () => {

  const subTotal = useSelector(selectSubTotal);
  const tax = useSelector(selectTax);
  const total = useSelector(selectTotal);

  return (
    <div className='border-t bg-muted p-4'>
      <div className='space-y-2 text-sm'>
        <div className='flex justify-between'>
          <span>Subtotal</span>
          <span>${subTotal}</span>
        </div>
        <div className='flex justfy-between'>
          <span>Tax</span>
          <span>${tax}</span>
        </div>
        <Separator></Separator>
        <div className='flex justify-between'>
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

    </div >
  )
}
