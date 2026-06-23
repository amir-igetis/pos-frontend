import { Button } from '@/components/ui/button';
import { clearCart, selectCartItems, selectHeldOrders } from '@/ReduxToolkit/feature/Cart/cartSlice';
import { ShoppingCart, Trash2 } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CartItem } from './CartItem';
import { CartSummary } from './CartSummary';
import { HeldOrderDialog } from './HeldOrderDialog';

export const CartSection = () => {
    const [showHeldOrdersDialog, setShowHeldOrdersDialog] = React.useState(false);
    const cartItems = useSelector(selectCartItems);
    // const heldOrders = useSelector(selectHeldOrders);
    const dispatch = useDispatch();
    const handleClearCart = () => {
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
                            onClick={handleClearCart}
                            variant="outline" size="sm">
                            <Trash2 className='w-4 h-4 mr-1'>
                                Clear</Trash2>
                        </Button>
                    </div>
                </div>

            </div>
            <div className='p-4 space-y-3'>
                {cartItems.map((item, index) => {
                    <CartItem item={item} key={index}></CartItem>
                })}
                {cartItems.length > 0 && <CartSummary />}
            </div>
            <HeldOrderDialog showHeldOrdersDialog={showHeldOrdersDialog}
                setShowHeldOrdersDialog={setShowHeldOrdersDialog}></HeldOrderDialog>

        </div>
    );
};
