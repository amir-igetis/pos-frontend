import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { resetOrder, selectCartItems, selectNote, selectSelectedCustomer, selectTotal } from '@/ReduxToolkit/feature/Cart/cartSlice';
import { createOrder } from '@/ReduxToolkit/feature/Order/orderThunk';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';


const paymentMethods = [
  { id: 1, name: 'Card', key: 'CARD' },
  { id: 2, name: 'Upi', key: 'UPI' },

  { id: 3, name: 'Cash', key: 'CASH' },

];

export const PaymentDialog = ({ showPaymentDialog, setShowPaymentDialog }) => {


  const [paymetnMethod, setPaymentMethod] = React.useState('cash');

  const dispatch = useDispatch();
  const totalAmount = useSelector(selectTotal);

  const { branch } = useSelector(state => state.branch);
  const { user } = useSelector(state => state);
  const selectedCustomer = useSelector(selectSelectedCustomer);
  const cart = useSelector(selectCartItems);
  const note = useSelector(selectNote);


  const handleCreate = async () => {

    if (cart.length == 0) {
      toast("Pleast add item to cart before checkout");
      return;
    }
    if (!selectedCustomer) {
      console.log("Select custormer")
      return;
    }



    // const orderData = {
    //   totalAmount,
    //   branchId: branch?.id,
    //   cashierId: user.userProfile?.id,
    //   customer: selectedCustomer,
    //   items: cart.map((item) => ({
    //     productId: item.id,
    //     quantity: item.quantity,
    //     price: item.price,
    //     total: item.price * item.quantity
    //   })),
    //   paymentType: paymetnMethod,
    //   note
    // }
    // console.log("order data", orderData)
    // dispatch(createOrder(orderData))

    try {
      const orderData = {
        totalAmount,
        branchId: branch?.id,
        cashierId: user.userProfile?.id,
        customer: selectedCustomer,
        items: cart.map((item) => ({
          productId: item.id,
          quantity: item.quantity,
          price: item.price,
          total: item.price * item.quantity
        })),
        paymentType: paymetnMethod,
        note
      }
      console.log("order data", orderData)
      await dispatch(createOrder(orderData)).unwrap()

      dispatch(resetOrder());

    } catch (error) {
      console.log("error ", error)
    }

  }



  return (
    <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Payment Method
          </DialogTitle>
        </DialogHeader>
        <div className='space-y-4'>
          <div className='text-center'>
            <h1 className='text-lg font-bold text-green-600 dark:text-green-900'>
              Pay
            </h1>
            <p className='text-sm text-muted-foreground'>
              Amount to be paid
            </p>
          </div>
          <div className="space-y-5">
            {paymentMethods.map((method) => (
              <Button onClick={() => setPaymentMethod(method.key)}
                variant={paymetnMethod === method.key ? 'default' : 'outline'}
                key={method.id} className='w-full text-left'>
                {method.name}
              </Button>
            ))}
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleCreate}>
            Finished Order
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
