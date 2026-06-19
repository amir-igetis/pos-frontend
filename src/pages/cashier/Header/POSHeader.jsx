// import { Button } from '@/components/ui/button'
// import { useSidebar } from '@/context/hook/useSidebar'
// import { AlignJustify } from 'lucide-react'
// import React from 'react'

// const POSHeader = () => {
//     const { setSidebarOpen } = useSidebar();
//     return (
//         <div className='bg-card border-b px-6 py-4'>
//             <div className='flex items-center justify-between'>
//                 <div>
//                     <Button
//                         onClick={() => setSidebarOpen(true)}
//                     >
//                         <AlignJustify />
//                     </Button>
//                 </div>
//                 <div>
//                     <h1 className='text-2xl font-bold text-red-500'>Hello</h1>
//                     <p className='text-sm text-muted-foreground'> what is up</p>
//                 </div>
//             </div>

//         </div>
//     )
// }

// export default POSHeader


import React from 'react';
import { Menu } from 'lucide-react';
import { useSidebar } from '@/context/hook/useSidebar'; // Adjust path to match your folder structure
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const POSHeader = () => {
    const { setSidebarOpen } = useSidebar();

    return (
        <header className="flex items-center justify-between px-6 py-3 bg-white border-b shrink-0 h-[72px] relative z-10">

            {/* Left: Hamburger Button */}
            <div className="flex items-center">
                <Button
                    onClick={() => setSidebarOpen(true)}
                    className="bg-[#0f3424] hover:bg-[#0f3424]/90 text-white rounded-md w-10 h-10 p-0 flex items-center justify-center"
                >
                    <Menu className="w-5 h-5" />
                </Button>
            </div>

            {/* Center: Title & Subtitle */}
            <div className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center">
                <h1 className="text-lg font-bold tracking-tight text-slate-900 leading-tight">
                    POS Terminal
                </h1>
                <p className="text-[12px] text-slate-500">Create new Order</p>
            </div>

            {/* Right: User Profile */}
            <div className="flex items-center gap-3">
                <div className="text-right hidden sm:block">
                    <p className="text-sm font-bold text-red-500 leading-tight">Hello</p>
                    <p className="text-xs text-slate-400">what is up</p>
                </div>
                <Avatar className="w-10 h-10 border border-slate-200">
                    <AvatarImage src="https://github.com/shadcn.png" alt="User" />
                    <AvatarFallback>U</AvatarFallback>
                </Avatar>
            </div>

        </header>
    );
}

export default POSHeader;