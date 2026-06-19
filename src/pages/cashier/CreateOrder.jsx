import React, { useState } from "react";
import {
    Search, Scan, Minus, Plus, Trash2, User,
    ChevronDown, Printer, History, Wallet, Percent,
    NotebookPen
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea";

const PRODUCTS = [
    { id: 1, name: "Product Name", sku: "SKU12345", price: 899, category: "men_shirt", img: "https://placehold.co/150x200" },
    { id: 2, name: "Product Name", sku: "SKU12345", price: 899, category: "men_shirt", img: "https://placehold.co/150x200" },
    { id: 3, name: "Product Name", sku: "SKU12345", price: 899, category: "men_shirt", img: "https://placehold.co/150x200" },
];

const CreateOrder = () => {
    const [cartItems, setCartItems] = useState([
        { id: 10, name: "Men Slim Fit Checkered Spread Collar Casual Shirt (Pack of 2)", sku: "SHRT-S-COTTON-BLACK-2025", price: 799, quantity: 2 },
        { id: 11, name: "Men Slim Fit Checkered Spread Collar Casual Shirt (Pack of 2)", sku: "SHRT-S-COTTON-BLACK-2025", price: 799, quantity: 2 },
        { id: 12, name: "Men Slim Fit Checkered Spread Collar Casual Shirt (Pack of 2)", sku: "SHRT-S-COTTON-BLACK-2025", price: 799, quantity: 2 },
    ]);

    return (
        // Adjust height to subtract the 72px header so it doesn't overflow the viewport
        <div className="flex w-full h-[calc(100vh-72px)] bg-[#f8fafc] text-slate-900 font-sans overflow-hidden">

            {/* Left Column: Product Selection */}
            <div className="flex flex-col w-[30%] border-r bg-[#fafafa] p-4">
                <div className="flex gap-2 mb-4">
                    <div className="relative flex-1">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-slate-400" />
                        <Input placeholder="Search products..." className="pl-9 bg-white" />
                    </div>
                    <Button variant="outline" className="bg-white">
                        <Scan className="w-4 h-4 mr-2" /> scan
                    </Button>
                </div>

                <div className="flex justify-between items-center mb-4 px-1">
                    <span className="text-sm text-slate-500">2 product founds</span>
                </div>

                <ScrollArea className="flex-1 pr-2">
                    <div className="grid grid-cols-2 gap-4 pb-4">
                        {PRODUCTS.map((product) => (
                            <Card key={product.id} className="overflow-hidden cursor-pointer hover:border-primary/50 transition-all shadow-sm">
                                <div className="aspect-[3/4] bg-slate-100 relative p-2">
                                    <img src={product.img} alt={product.name} className="object-cover w-full h-full rounded-sm" />
                                </div>
                                <CardContent className="p-3">
                                    <h3 className="text-sm font-bold truncate">{product.name}</h3>
                                    <p className="text-[10px] text-slate-400 mb-2">{product.sku}</p>
                                    <div className="flex items-center justify-between mt-1">
                                        <span className="text-sm font-bold text-emerald-500">{product.price} $</span>
                                        <Badge variant="secondary" className="text-[10px] bg-slate-100 text-slate-600 hover:bg-slate-200">{product.category}</Badge>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </ScrollArea>
            </div>

            {/* Center Column: Cart */}
            <div className="flex flex-col flex-1 bg-[#fcfcfc] border-r">
                <div className="flex items-center justify-between px-6 py-4 border-b bg-white">
                    <h2 className="text-sm font-bold flex items-center">
                        <ShoppingCartIcon className="w-4 h-4 mr-2" /> Cart ( {cartItems.length} ) item
                    </h2>
                    <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="h-8 text-xs bg-white"><History className="w-3 h-3 mr-1" /> Held</Button>
                        <Button variant="outline" size="sm" className="h-8 text-xs bg-white text-slate-700"><Trash2 className="w-3 h-3 mr-1" /> Clear</Button>
                    </div>
                </div>

                <ScrollArea className="flex-1 p-6">
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex gap-4 p-4 bg-white border border-l-4 border-l-[#0f3424] rounded-lg shadow-sm">
                                <div className="flex-1">
                                    <h4 className="text-sm font-bold leading-snug pr-4">{item.name}</h4>
                                    <p className="text-xs text-slate-400 mt-1 uppercase">{item.sku}</p>
                                </div>

                                <div className="flex items-center gap-6">
                                    {/* Quantity Controls */}
                                    <div className="flex items-center border rounded-md h-8 bg-white">
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none hover:bg-slate-100"><Minus className="h-3 w-3" /></Button>
                                        <span className="w-8 text-center text-sm font-bold">{item.quantity}</span>
                                        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-none hover:bg-slate-100"><Plus className="h-3 w-3" /></Button>
                                    </div>

                                    {/* Price & Delete */}
                                    <div className="text-right w-16">
                                        <span className="text-sm font-bold">{item.price}</span>
                                        <p className="text-xs font-bold text-emerald-600 mt-1">{item.price * item.quantity}.00</p>
                                    </div>
                                    <button className="text-slate-400 hover:text-red-500 transition-colors">
                                        <Trash2 className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>

                {/* Subtotals Area */}
                <div className="p-6 bg-white border-t space-y-2 text-sm font-medium">
                    <div className="flex justify-between">
                        <span className="text-slate-500">Subtotal</span>
                        <span>₹ 2398.00</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-slate-500">Tax</span>
                        <span>₹ 239.80</span>
                    </div>
                    <div className="flex justify-between font-bold border-t pt-3 mt-3">
                        <span>Total</span>
                        <span>₹ 2637.80</span>
                    </div>
                </div>
            </div>

            {/* Right Column: Customer Sidebar */}
            <aside className="w-[22%] min-w-[280px] bg-white p-5 flex flex-col gap-6 overflow-y-auto">

                {/* Section: Customer */}
                <div className="space-y-3">
                    <div className="flex items-center text-sm font-bold">
                        <User className="w-4 h-4 mr-2" /> Customer
                    </div>
                    <Button variant="outline" className="w-full justify-between font-normal text-slate-700 h-10 bg-slate-50">
                        Select Customer
                    </Button>
                </div>

                {/* Section: Discount */}
                <div className="space-y-3">
                    <div className="flex items-center text-sm font-bold">
                        <Percent className="w-4 h-4 mr-2" /> Discount
                    </div>
                    <Input className="h-10 bg-slate-50" placeholder="0" />
                    <div className="flex gap-2">
                        <Button className="flex-1 bg-[#0f3424] hover:bg-[#0f3424]/90 text-white">%</Button>
                        <Button variant="outline" className="flex-1">$</Button>
                    </div>
                </div>

                {/* Section: Note */}
                <div className="space-y-3">
                    <div className="flex items-center text-sm font-bold">
                        <NotebookPen className="w-4 h-4 mr-2" /> Note
                    </div>
                    <Textarea placeholder="Enter note..." className="bg-slate-50 min-h-[80px] resize-none" />
                </div>

                <div className="mt-auto pt-6 space-y-6 border-t">
                    {/* Final Total */}
                    <div className="text-center">
                        <div className="text-[40px] font-black text-emerald-500 leading-none">899$</div>
                        <p className="text-xs font-bold text-slate-500 mt-2 uppercase tracking-wider">Total Amount</p>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-2">
                        <Button className="w-full h-12 bg-[#0f3424] hover:bg-[#0f3424]/90 text-white font-bold text-sm">
                            <Wallet className="w-4 h-4 mr-2" /> Process Payment
                        </Button>
                        <Button variant="outline" className="w-full h-10 font-bold text-sm text-slate-700 bg-slate-50">
                            <History className="w-4 h-4 mr-2" /> Hold Order
                        </Button>
                    </div>
                </div>
            </aside>

        </div>
    );
}

function ShoppingCartIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="21" r="1" /><circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
        </svg>
    );
}

export default CreateOrder;