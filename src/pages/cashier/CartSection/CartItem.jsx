import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { updateCartItemQuantity } from '@/ReduxToolkit/feature/Cart/cartSlice'
import { Minus, Plus } from 'lucide-react'
import React from 'react'
import { useDispatch } from 'react-redux'

export const CartItem = ({ item }) => {

    const dispatch = useDispatch();
    const handleUpdateCartItemQuantity = (quantity) => {
        if (quantity > 0) {
            dispatch(updateCartItemQuantity({ id: item.id, quantity: item.quantity + quantity }));

        }
    }

    return (
        <Card className={'border-l-4 border-l-green-800'}>
            <CardContent className={'p-3'}>
                <div className='flex items-center justify-between'>
                    <div>
                        <h3 className='font-medium text-sm'>{item.name}</h3>
                        <p className='text-xs text-muted-foreground'>{item.sku}</p>
                    </div>
                    <div className='flex items-center space-x-2'>
                        <div className='flex items-center border rounded'>
                            <Button onClick={() => handleUpdateCartItemQuantity(item.quantity - 1)}
                                variant='ghost' size='sm'>
                                <Minus />
                            </Button>
                            <span className='px-3 py-1 text-sm font-medium min-w[3rem]'>
                                {item.quantity}
                            </span>
                            <Button onClick={() => handleUpdateCartItemQuantity(item.quantity + 1)}
                                variant='ghost' size='sm'>
                                <Plus />
                            </Button>
                        </div>
                        <div className='text-right'>
                            <p className='font-semibold text-green-700'>{item.sellingPrice} $</p>
                            <p className='text-sm font-bold text-green-700'>{item.quantity} items</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
