import { Card, CardContent } from '@/components/ui/card';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

const shiftData = {
    cashier: {
        fullName: "Jane Doe",

    },
    shiftStart: "Aug 8, 2025, 8:30 am",
    // shiftEnd: "Ongoing",
    duration: "8 hours"
}

const ShiftInformation = () => {

    const dispatch = useDispatch();
    const shiftData = useSelector(state => state.shiftReport.currentShift);


    return (
        <Card>
            <CardContent>
                <h2 className='text-xl font-semibold mb-4'>
                    Shift Information
                </h2>
                <div className='space-y-2'>
                    <div className='flex justify-between'>
                        <span className='text-muted-foregroud'>Cashier: </span>
                        <span className='font-medium'>{shiftData.cashier.fullName}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span className='text-muted-foregroud'>Shift Start: </span>
                        <span className='font-medium'>{shiftData?.shiftStart}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span className='text-muted-foregroud'>Shift End: </span>
                        <span className='font-medium'>{shiftData?.shiftEnd ?
                            shiftData?.shiftEnd : "Ongoing"}</span>
                    </div>

                    <div className='flex justify-between'>
                        <span className='text-muted-foregroud'>Duration: </span>
                        <span className='font-medium'>{shiftData?.duration}</span>
                    </div>


                </div>
            </CardContent>
        </Card>
    )
}
export default ShiftInformation;