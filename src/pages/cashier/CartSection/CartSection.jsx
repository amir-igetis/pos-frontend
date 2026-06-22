import { Button } from '@/components/ui/button';
import { clearCart, selectCartItems, selectHeldOrders } from '@/ReduxToolkit/feature/Cart/cartSlice';
import { ShoppingCart, Trash2 } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const CartSection = () => {
    const [showHeldOrdersDialog, setShowHeldOrdersDialog] = React.useState(false);
    const cartItems = useSelector(selectCartItems);
    // const heldOrders = useSelector(selectHeldOrders);
    const dispatch = useDispatch();
    const handleClearOrder = () => {
        dispatch(clearCart());
    }


    return (
        <div className='border-r w-2/5 flex flex-col bg-card'>
            <div className='p-4 border-b bg-muted'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-semibold flex items-center'>
                        <ShoppingCart />
                        Cart ({cartItems.length}) item
                    </h2>
                    <div className='flex space-x-2'>
                        <Button onClick={() => setShowHeldOrdersDialog(true)}
                            variant="outline" size="sm">
                            Held
                        </Button>
                        <Button
                            onClick={handleClearOrder}
                            variant="outline" size="sm">
                            <Trash2 className='w-4 h-4 mr-1'>
                                Clear</Trash2>
                        </Button>
                    </div>
                </div>

            </div>
            <div className='p-4 space-y-3'>
                Finish the cart section UI here, such as listing cart items, showing total price, etc. For now, we will just show a placeholder text.
            </div>

        </div>
    )
}
