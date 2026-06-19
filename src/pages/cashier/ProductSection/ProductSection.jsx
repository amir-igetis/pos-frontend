import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { getBranchById } from '@/ReduxToolkit/feature/Branch/branchThunk';
import { Barcode } from 'lucide-react';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

export const ProductSection = () => {
    const [searchTerm, setSearchTerm] = useState("");
    // const { userProfile } = useSelector(state => state.user);
    const { branch } = useSelector(state => state.branch);
    const { products } = useSelector(state => state.product);

    const dispatch = useDispatch();

    useEffect(() => {
        if (branch?.storeId) {
            // dispatch(getBranchById({ id: branch.storeId }))
            dispatch(getBranchById(branch.storeId))

        }
    }, [branch])

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        // add logic to filter product based on serach
    };

    console.log("products", products);
    return (
        <div className='w-2/5 flex flex-col bg-card border-r'>
            <div className='p-4 border-b bg-muted'>
                <div>
                    <Input
                        className={"py-5"}
                        placeholder="Search products...."
                        value={searchTerm}
                        type={"text"}
                        onChange={handleSearchChange}
                    >
                    </Input>
                </div>
                <div className='flex items-center justify-between pt-2'>
                    <span>{2} product founds</span>
                    <Button variant='outline' sizse='sm' className="text-xs">
                        <Barcode /> scan
                    </Button>
                </div>
            </div>
            {/* <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1'>
                {products.map((product, index) => (
                    <ProductCard product = {product} key={index} />
                ))}

            </div> */}
        </div>
    )
}
