import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import React from 'react'

export const PaymentDialog = ({ showPaymentDialog, setShowPaymentDialog }) => {


  const [paymetnMethod, setPaymentMethod] = React.useState('cash');




  return (
    <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Payment Method
          </DialogTitle>
        </DialogHeader>
        <div className='space-y-4'>

        </div>
      </DialogContent>
    </Dialog>
  )
}
