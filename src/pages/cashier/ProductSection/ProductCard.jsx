import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { addToCart } from '@/ReduxToolkit/feature/Cart/cartSlice';
import React from 'react'
import { useDispatch } from 'react-redux';

export const ProductCard = ({ product }) => {

    const dispatch = useDispatch();
    const handleAddProductToCart = () => {
        dispatch(addToCart(product));
    }


    return (
        <Card onClick={handleAddProductToCart} key={Math.random} className="py-4">
            <CardContent className={""}>
                <div className='aspect-square bg-muted rounded-md mb-2 flex items-center'>
                    <img className='h-30 w-30 object-cover' src={product?.image} alt='image'>
                    </img>
                </div>
                <div className=''>
                    <h3 className='font-medium text-sm truncate'>
                        {product?.name}

                    </h3>
                    <p className='text-xs text-muted-foreground'>
                        {product?.sku}
                    </p>
                    <div className='flex items-center justify-between'>
                        <p className='font-semibold text-green-700'>
                            {product?.sellingPrice} $
                        </p>
                        <Badge variant='secondary' className={'text-xs'}>
                            {product?.category}
                        </Badge>
                    </div>
                </div>
            </CardContent>

        </Card>
    );
};


