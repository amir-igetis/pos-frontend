import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { selectDiscount, setDiscount } from '@/ReduxToolkit/feature/Cart/cartSlice';
import { Tag } from 'lucide-react';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const DiscountSection = () => {

  // const [discount, setDiscount] = useState({ type: 'percentage', value: 0 });
  const dispatch = useDispatch();
  // const [type, setType] = useState('percentage');

  const discount = useSelector(selectDiscount);
  const handleDiscountChange = (e) => {
    // const value = e.target.value;
    // setDiscount(prev => ({...prev, value}));
    // setDiscount({ ...discount, value });
    // discount(setDiscount({ type, value }));
    const value = e.target.value;
    dispatch(setDiscount({ ...discount, value }));
  };

  console.log("discount", discount);

  // console.log("discount", discount);



  return (
    <div className='p-4 border-b'>
      <h2 className='text-lg font-semibold mb-3 flex items-center'>
        <Tag className='w-5 h-5 mr-2'> Discount</Tag>
      </h2>
      <div className='space-y-3'>
        <Input
          placeholder='Enter Discount Value'
          type='number'
          value={discount.value}
          onChange={handleDiscountChange}>
        </Input>
        <div className='flex gap=5'>

          <Button className='flex-1'
            onClick={() => setDiscount({ ...discount, type: 'percentage' })}
            variant={discount.type === 'percentage' ? 'default' : 'outline'}>
            %
          </Button>
          <Button
            className='flex-1'
            onClick={() => setDiscount({ ...discount, type: 'fixed' })}
            variant={discount.type === 'fixed' ? 'default' : 'outline'}>
            $
          </Button>

        </div>
      </div>
    </div>
  )
}
