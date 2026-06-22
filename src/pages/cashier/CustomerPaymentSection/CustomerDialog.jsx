import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { setSelectedCustomer } from '@/ReduxToolkit/feature/Cart/cartSlice';
import { getAllCustomer } from '@/ReduxToolkit/feature/Customer/customerThunk';
// import { getAllCustomer } from '@/ReduxToolkit/feature/Customer/customerThunk';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const customers = [
    {
        id: 1,
        fullName: "Amirul Momenin",
        phone: "555-555-5555",
        email: "amirul@email.com"
    },
    {
        id: 2,
        fullName: "Amirul Momenin3",
        phone: "555-555-5554",
        email: "amirul2@email.com"
    },
    {
        id: 3,
        fullName: "Amirul Momenin2",
        phone: "555-555-5553",
        email: "amirul3@email.com"
    }
]

export const CustomerDialog = ({ showCustomerDialog, setShowCustomerDialog }) => {
    const [showCustomerForm, setShowCustomerForm] = useState(false);
    const { customers } = useSelector(state => state.customer);
    const dispatch = useDispatch();



    const handleSelectCustomer = (customer) => {
        console.log("selected customer: ", customer);
        dispatch(setSelectedCustomer(customer));
        setShowCustomerDialog(false);
    };

    useEffect(() => {
        dispatch(getAllCustomer())
    }, [])

    console.log("selected customer", customers);

    console.log("customer", customers);

    return (
        <Dialog open={showCustomerDialog} onOpenChange={setShowCustomerDialog}>
            <DialogContent className={'max-w-2xl'}>
                <DialogHeader>
                    <DialogTitle> Select Customer </DialogTitle>
                </DialogHeader>

                <div className='mb-4'>
                    <Input placeholder='Search Customer'></Input>
                </div>
                <div className='max-h-96 overflow-y-auto'>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead className={'w-[150px]'}>Name</TableHead>
                                <TableHead className={'w-[150px]'}>Phone</TableHead>
                                <TableHead className={'w-[150px]'}>Email</TableHead>

                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {customers.map((customer) => (
                                <TableRow key={customer.id}>
                                    <TableCell>{customer.fullName}</TableCell>
                                    <TableCell>{customer.phone}</TableCell>
                                    <TableCell>{customer.email}</TableCell>
                                    <TableCell>
                                        {" "}
                                        <Button
                                            variant='outline'
                                            className={'w-full'}
                                            onClick={() => handleSelectCustomer(customer)}>
                                            Select
                                        </Button>
                                    </TableCell>

                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            </DialogContent>
        </Dialog>
    )
};
