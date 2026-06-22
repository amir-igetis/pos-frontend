

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Edit, User } from 'lucide-react';
import React, { useState } from 'react'
import { CustomerDialog } from './CustomerDialog';
import { useSelector } from 'react-redux';
import { selectSelectedCustomer } from '@/ReduxToolkit/feature/Cart/cartSlice';

// let selectedCustomer = {
//     fullName: "John Doe",
//     phone: "123-456-789"
// };

// selectedCustomer = null;
export const CustomerSection = () => {
    const [showCustomerDialog, setShowCustomerDialog] = useState(false);
    const customer = useSelector(selectSelectedCustomer);


    return (
        <div className='p-4 border-b'>
            <h2 className='text-lg font-semibold mb-3 flex items-center'>
                <User className='w-5 h-5 mr-2'> Customer</User>
            </h2>
            {customer ? (
                <Card
                    className={'border-green-400 bg-green-50 dark:bg-green-950'}>
                    <CardContent
                        className={'p-3 flex items-center justify-between gap-5'}>
                        <div>
                            <h3 className='font-medium text-green-800 dark:text-green-300'>
                                {customer.fullName}
                            </h3>
                            <p className='text-sm text-green-600 dark:text-green-300'>
                                {customer.phone}
                            </p>
                        </div>
                        <Button
                            variant='outline'
                            className={'mt-2 w-full'}
                            onClick={() => setShowCustomerDialog(true)}
                        >
                            <Edit />

                        </Button>
                    </CardContent>
                </Card>
            ) : (
                <div>
                    <Button
                        onClick={() => setShowCustomerDialog(true)}
                        variant={'outline'}
                        className={'w-full py-5'}
                    > Select Customer
                    </Button>
                </div>
            )}
            <CustomerDialog
                showCustomerDialog={showCustomerDialog}
                setShowCustomerDialog={setShowCustomerDialog}
            />
        </div>
    );
};
