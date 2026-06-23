import React, { useEffect, useState } from 'react'
import OrderTable from './OrderTable';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import OrderDetails from './OrderDetails/OrderDetails';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderByCashier } from '@/ReduxToolkit/feature/Order/orderThunk';
import { getUserProfile } from '@/ReduxToolkit/feature/User/userThunk';

const OrderHistory = () => {

    const [showOrderInvoiceDialog,
        setShowOrderInvoiceDialog]
        = useState(false);

    const [selectedOrder, setSelectedOrder] = useState(null);

    // const { orders } = useSelector(state => state.order);
    const { userProfile } = useSelector(state => state.user);
    const dispatch = useDispatch();


    const handleViewOrderDetails = (order) => {
        setSelectedOrder(order);
        setShowOrderInvoiceDialog(true)

    }

    useEffect(() => {
        dispatch(getOrderByCashier(userProfile.id));
    }, [userProfile]);



    return (
        <div className='h-full flex flex-col'>
            <div className='flex-1 p-4 overflow-auto'>
                <OrderTable
                    handleViewOrderDetails={handleViewOrderDetails} />
            </div>

            <Dialog open={showOrderInvoiceDialog}
                onOpenChange={setShowOrderInvoiceDialog}>
                <DialogContent className="max-w-4xl">
                    <DialogHeader>
                        <DialogTitle>
                            Order - Invoice
                        </DialogTitle>

                    </DialogHeader>
                    <OrderDetails selectedOrder={selectedOrder}
                    />
                    <DialogFooter>
                        <Button>
                            <Download />
                            Download PDF
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default OrderHistory;
