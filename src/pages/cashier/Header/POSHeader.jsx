import { Button } from '@/components/ui/button'
import { useSidebar } from '@/context/hook/useSidebar'
import { AlignJustify } from 'lucide-react'
import React from 'react'

const POSHeader = () => {
    const { setSidebarOpen } = useSidebar();
    return (
        <div className='bg-card border-b px-6 py-4'>
            <div className='flex items-center justify-between'>
                <div>
                    <Button
                        onClick={() => setSidebarOpen(true)}
                    >
                        <AlignJustify />
                    </Button>
                </div>
                <div>
                    <h1 className='text-2xl font-bold text-red-500'>Hello</h1>
                    <p className='text-sm text-muted-foreground'> what is up</p>
                </div>
            </div>

        </div>
    )
}

export default POSHeader