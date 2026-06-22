import { resumeOrder, selectHeldOrders } from '@/ReduxToolkit/feature/Cart/cartSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const heldOrders = [
  {
    id: '34567',
    items: [1, 1, 1, 1],
    timeStamp: '2023-10-10 10:00:00',
  },
  {
    id: '34568',
    items: [1, 1, 1, 1],
    timeStamp: '2023-10-10 11:00:00',
  }
]

export const HeldOrderDialog = ({ showHeldOrdersDialog, setShowHeldOrdersDialog }) => {
  const dispatch = useDispatch();

  const handleResumeOrder = (order) => {
    console.log("resuming order: ", order);
    dispatch(resumeOrder(order));
  };
  const heldOrders = useSelector(selectHeldOrders);

  return (
    <Dialog open={showHeldOrdersDialog} onOpenChange={setShowHeldOrdersDialog}>
      <DialogContent className={'max-w-lg'}>
        <DialogHeader>
          <DialogTitle> Held Orders </DialogTitle>
        </DialogHeader>
        <div className='max-h-96 overflow-y-auto'>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Order ID</TableHead>
                <TableHead>Items</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {heldOrders.map(order => (
                <TableRow key={order.id}>
                  <TableCell>{order.id}</TableCell>
                  <TableCell>{order.items.length}</TableCell>
                  <TableCell>{order.timeStamp}</TableCell>
                  <TableCell>
                    <Button variant='outline' className={'w-full'} onClick={() => handleResumeOrder(order)}>
                      Resume
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>

    </Dialog>
  );
};
