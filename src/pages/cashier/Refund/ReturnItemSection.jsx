import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { createRefund } from '@/ReduxToolkit/feature/Refund/refundThunk'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const returnReasons = [
  "Wrong product",
  "Damage Product",
  "Not interested anymore",
  "Others"
]

const refundMethods = ["UPI", "CARD", "CASH"];


const ReturnItemSection = ({ selectedOrder, setShowReturnReciptDialog }) => {
  const [returnReason, setReturnReason] = useState("")
  const [otherReason, setOtherReason] = useState("")
  const [refundMethod, setRefundMethod] = useState("UPI");

  const { branch } = useSelector(state => state.branch);
  const { user } = useSelector(state => state);
  const dispatch = useDispatch();

  const processRefund = () => {
    setShowReturnReciptDialog(true)
    const refundDTO = {
      orderId: selectedOrder.id,
      branchId: branch?.id,
      cashierId: user.userProfile?.id,
      reason: returnReason,
      refundMethod: refundMethod
    }
    console.log("proceed refund", refundDTO);
    dispatch(createRefund(refundDTO))
  }

  // const handleCreateRefund = () => {
  //   // setShowReturnReciptDialog(false);

  // }





  return (
    <div className='p-4 w-1/2'>
      <Card className="mt-4">
        <CardContent className="p-4">
          <div className='space-y-4'>

            <div>
              <Label className="mb-2 block">Return Reason</Label>
              <Select
                value={returnReason}
                onValueChange={setReturnReason}
              >
                <SelectTrigger className={"w-full"}>
                  <SelectValue placeholder="Select a reason" />
                </SelectTrigger>

                <SelectContent>
                  {returnReasons.map((reason) => (
                    <SelectItem key={reason} value={reason}>
                      {reason}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {returnReason === "Others" && (
              <div>
                <Label className="mb-2 block">Specify Reason</Label>
                <Textarea
                  placeholder="Please specify the return reason"
                  value={otherReason}
                  onValueChange={(e) => setOtherReason(e)}
                />
              </div>
            )}

            <div>
              <Label className="mb-2 block">
                Refund Method</Label>
              <Select
                value={refundMethod}
                onValueChange={(value) => setRefundMethod(value)}
              >
                <SelectTrigger className={"w-full"}>
                  <SelectValue placeholder="Select a Refund Method" />
                </SelectTrigger>

                <SelectContent>
                  {refundMethods.map((method) => (
                    <SelectItem key={method} value={method}>
                      {method}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className='pt-5 border-t'>
              <div className='flex justify-baseline text-lg font-semibold'>
                <span>Total Refund Amount : </span>
                <span>$ {selectedOrder.totalAmount}</span>
              </div>

              <Button onClick={processRefund} className={"w-full py-6 mt-5"}>
                Process Refund
              </Button>

            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default ReturnItemSection

