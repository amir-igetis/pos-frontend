// import { Button } from '@/components/ui/button'
// import { Cross, X } from 'lucide-react'
// import React from 'react'
// import { Link } from 'react-router-dom'

// function Sidebar({ navItems, onClose }) {
//     return (
//         <div className='w-64 border-r border-border bg-sidebar p-4 flex flex-col h-full relative'>
//             <div className='flex items-center justify-between'>
//                 <h1 className='text-xl font-bold text-sidebar-foreground'>
//                     POS SYSTEM
//                 </h1>
//                 <Button size='icon' onClick={onClose}>
//                     <X />

//                 </Button>
//             </div>
//             <nav className='space-y-2 flex-1'>
//                 {navItems.map((item) => <Link
//                     onClick={() => {
//                         if (onClose) onClose();

//                     }}
//                     className={`flex items-center justify-between p-3 rounded-md
//                 hover:bg-sidebar-accent transition-colors ${location.pathname
//                             === item.path ? "bg-sidebar-accent text-sidebar-accent-foreground" : "text-sidebar-foreground"
//                         }`}
//                     key={item.path} to={item.path}>
//                     <div className='flex items-center gap-3'>
//                         {item.icon}
//                         <span>{item.label}</span>
//                     </div>
//                 </Link>)}

//             </nav>

//         </div>
//     )
// }

// export default Sidebar


import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useDispatch, useSelector } from 'react-redux';
import { getBranchById } from '@/ReduxToolkit/feature/Branch/branchThunk';
import { logout } from '@/ReduxToolkit/feature/Auth/authSlice';

const branch = { name: "Kolkata East Branch", address: "New Town 123" }

const Sidebar = ({ navItems, onClose }) => {

    const { userProfile } = useSelector(state => state.user);
    const { branch } = useSelector(state => state.branch);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    useEffect(() => {
        if (userProfile?.branchId) {
            dispatch(getBranchById({ id: userProfile.branchId }))
        }
    }, [userProfile])

    const handleLogout = () => {
        dispatch(logout()
        )
        navigate('/');
    }

    // useEffect(() => {
    //     if (userProfile?.branchId) {
    //         dispatch(getBranchById({ id: userProfile.branchId }))
    //     }
    // }, [userProfile])


    return (
        <div className="w-64 h-full bg-white flex flex-col border-r shadow-2xl">
            {/* Sidebar Header */}
            <div className="flex items-center justify-between p-4 mb-2">
                <h2 className="text-xl font-bold tracking-tight text-slate-900">POS SYSTEM</h2>
                <Button
                    onClick={onClose}
                    className="p-1.5 bg-[#63a814] hover:bg-[#528a10] text-white rounded-md transition-colors"
                >
                    <X size={18} />
                </Button>
            </div>

            {/* Navigation Links */}
            <nav className="flex flex-col px-3 space-y-1">
                {navItems.map((item, index) => (
                    <NavLink
                        key={index}
                        to={item.path}
                        onClick={onClose} // Optional: close sidebar on mobile when clicking a link
                        className={({ isActive }) =>
                            `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${isActive
                                ? "bg-slate-100 text-slate-900 font-medium"
                                : "text-slate-600 hover:bg-slate-50"
                            }`
                        }
                    >
                        <div className="text-slate-700">{item.icon}</div>
                        <span className="text-sm">{item.label}</span>
                    </NavLink>
                ))}
            </nav>

            {branch && (
                <div className='mt-6 ps-4 py-3 bg-sidebar-accent rounded-lg'>
                    <h3 className='font-medium text-sidebar-accent-foreground'>
                        {branch?.name}
                    </h3>
                    <p className='text-xs text-secondary-foreground/70 mt-1'>
                        {branch?.address}
                    </p>

                </div>
            )}
            <div className="pt-10">
                <Button
                    className="py-5 w-full"
                    onClick={handleLogout}>
                    Log out
                </Button>
            </div>
        </div>
    );
}

export default Sidebar;