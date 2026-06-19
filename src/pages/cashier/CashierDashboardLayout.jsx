import React, { useState } from 'react'
import Sidebar from './Sidebar/Sidebar';
import { Clock, ReceiptIcon, RotateCcw, ShoppingBag, ShoppingCart } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { SidebarProvider } from '@/context/SidebarProvider';
import { useSidebar } from '@/context/hook/useSidebar';
import POSHeader from './Header/POSHeader';

const navItems = [
  {
    path: "/cashier",
    icon: <ShoppingCart size={20} />,
    label: "POS Terminal"
  },
  {
    path: "/cashier/orders",
    icon: <Clock size={20} />,
    label: "Order History"
  },
  {
    path: "/cashier/returns",
    icon: <RotateCcw size={20} />,
    label: "Returns/Refund"
  },
  {
    path: "/cashier/shift-summary",
    icon: <ReceiptIcon size={20} />,
    label: "Shift Summary"
  }
]
const LayoutContent = () => {
  const { sidebarOpen, setSidebarOpen } = useSidebar();

  return (
    <div className='flex h-screen bg-background'>
      {sidebarOpen && (
        <div
          className='fixed inset-0 bg-black/40'
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <div
        className={`fixed z-30 h-full transition-transform duration-200
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <Sidebar navItems={navItems} onClose={() => setSidebarOpen(false)} />
      </div>

      <div className='flex-1 overflow-auto'>
        <POSHeader />
        <Outlet />
      </div>
    </div>
  )
}

const CashierDashboardLayout = () => {
  return (
    <SidebarProvider>
      <LayoutContent />

    </SidebarProvider>
  )
}

export default CashierDashboardLayout

