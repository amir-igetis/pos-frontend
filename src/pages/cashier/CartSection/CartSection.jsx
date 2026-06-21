import { Button } from '@/components/ui/button';
import { selectCartItems } from '@/ReduxToolkit/feature/Cart/cartSlice';
import { ShoppingCart } from 'lucide-react';
import React from 'react'
import { useSelector } from 'react-redux';

export const CartSection = () => {
    const [showHeldOrdersDialog, setShowHeldOrdersDialog] = React.useState(false);
    const cartItems = useSelector(selectCartItems);


    return (
        <div className='border-r w-2/5 flex flex-col bg-card'>
            <div className='p-4 border-b bg-muted'>
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-semibold flex items-center'>
                        <ShoppingCart />
                        Cart ({cartItems.length}) item
                    </h2>
                    <div className='flex space-x-2'>
                        <Button onClick={() => setShowHeldOrdersDialog(true)} variant="outline" size="sm">

                        </Button>
                    </div>
                </div>

            </div>

        </div>
    )
}
