// import React from 'react'

// export const StoreDashboard = () => {
//     return (
//         <div>this is StoreDashboard</div>
//     )
// }



import React from 'react';
import {
    Box, LayoutDashboard, Store, GitBranch, ShoppingCart,
    Tags, Users, Bell, LineChart as ChartIcon, FileText,
    ArrowUpCircle, Settings, LogOut, DollarSign, User
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer } from 'recharts';

// shadcn/ui component imports
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// --- Mock Data ---
const navLinks = [
    { name: 'Dashboard', icon: LayoutDashboard, active: true },
    { name: 'Stores', icon: Store },
    { name: 'Branches', icon: GitBranch },
    { name: 'Products', icon: ShoppingCart },
    { name: 'Categories', icon: Tags },
    { name: 'Employees', icon: Users },
    { name: 'Alerts', icon: Bell },
    { name: 'Sales', icon: ChartIcon },
    { name: 'Reports', icon: FileText },
    { name: 'Upgrade Plan', icon: ArrowUpCircle },
    { name: 'Settings', icon: Settings },
];

const stats = [
    { title: 'Total Sales', value: '4599', subtext: '50', icon: DollarSign, isPositive: true },
    { title: 'Total Branches', value: '15', subtext: '-4', icon: Store, isPositive: false },
    { title: 'Total Products', value: '7899', subtext: '40', icon: ShoppingCart, isPositive: true },
    { title: 'Total Employees', value: '300', subtext: '30', icon: Users, isPositive: true },
];

const recentSales = [
    { location: 'Main Store', time: 'Today', amount: '$1,234' },
    { location: 'Downtown Branch', time: 'Today', amount: '$891' },
    { location: 'West Side Location', time: 'Yesterday', amount: '$654' },
    { location: 'East End Shop', time: 'Yesterday', amount: '$1,021' },
];

const chartData = [
    { name: 'Jan', sales: 1500 },
    { name: 'Feb', sales: 2800 },
    { name: 'Mar', sales: 2700 },
    { name: 'Apr', sales: 500 },
    { name: 'May', sales: 2000 },
    { name: 'Jun', sales: 1800 },
];

const StoreDashboard = () => {
    return (
        <div className="flex h-screen bg-background text-foreground font-sans overflow-hidden">

            {/* Sidebar */}
            <aside className="w-[260px] bg-muted/20 flex flex-col border-r shrink-0">
                <div className="flex-1 overflow-y-auto py-6">
                    {/* Logo */}
                    <div className="px-6 flex items-center gap-3 mb-6">
                        <Box className="w-6 h-6" />
                        <h1 className="text-xl font-bold tracking-tight">POS SYSTEM</h1>
                    </div>

                    {/* Navigation */}
                    <nav className="px-4 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href="#"
                                className={`flex items-center gap-4 px-4 py-3 rounded-lg font-medium transition-colors ${link.active
                                    ? 'bg-secondary text-secondary-foreground'
                                    : 'text-muted-foreground hover:bg-muted/50'
                                    }`}
                            >
                                <link.icon className="w-5 h-5" />
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>

                {/* Logout */}
                <div className="p-6">
                    <Button className="w-full flex items-center justify-center gap-2 bg-[#0d2a1b] hover:bg-[#0d2a1b]/90 text-white" size="lg">
                        <LogOut className="w-5 h-5" />
                        Logout
                    </Button>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col h-full bg-background overflow-hidden">

                {/* Header */}
                <header className="h-20 border-b flex items-center justify-between px-8 shrink-0">
                    <div>
                        <h2 className="text-xl font-bold">Rutika Shoppings</h2>
                        <p className="text-sm text-muted-foreground">Tuesday, August 26, 2025</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <Button size="icon" className="rounded-full bg-[#0d2a1b] hover:bg-[#0d2a1b]/90 text-white">
                            <Bell className="w-5 h-5" />
                        </Button>
                        <div className="flex items-center gap-3 ml-2">
                            <Avatar>
                                <AvatarImage src="" />
                                <AvatarFallback className="bg-muted text-muted-foreground"><User className="w-5 h-5" /></AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="text-sm font-bold leading-none">Pablo panay</p>
                                <p className="text-xs text-muted-foreground mt-1">pablo@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content Scrollable Area */}
                <div className="p-8 overflow-y-auto h-full bg-muted/10">
                    <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {stats.map((stat, index) => (
                            <Card key={index} className="shadow-sm border-muted/60">
                                <CardContent className="p-6 flex items-start justify-between">
                                    <div>
                                        <p className="text-sm text-muted-foreground mb-2">{stat.title}</p>
                                        <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                                        <p className={`text-sm ${stat.isPositive ? 'text-emerald-500' : 'text-red-500'}`}>
                                            {stat.subtext}
                                        </p>
                                    </div>
                                    <div className="w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500">
                                        <stat.icon className="w-6 h-6" />
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Lower Section Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                        {/* Recent Sales List */}
                        <Card className="shadow-sm border-muted/60">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">Recent Sales</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-col">
                                    {recentSales.map((sale, index) => (
                                        <div
                                            key={index}
                                            className={`flex justify-between items-center py-4 ${index !== recentSales.length - 1 ? 'border-b border-muted/40' : ''
                                                }`}
                                        >
                                            <div>
                                                <p className="font-bold text-sm">{sale.location}</p>
                                                <p className="text-xs text-muted-foreground mt-1">{sale.time}</p>
                                            </div>
                                            <p className="font-bold">{sale.amount}</p>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>

                        {/* Sales Trend Chart */}
                        <Card className="shadow-sm border-muted/60 flex flex-col">
                            <CardHeader className="pb-2">
                                <CardTitle className="text-lg">Sales Trend</CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1 w-full min-h-[250px] pb-6">
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={chartData} margin={{ top: 5, right: 5, bottom: 5, left: -20 }}>
                                        <XAxis
                                            dataKey="name"
                                            axisLine={false}
                                            tickLine={false}
                                            tick={{ fill: '#9ca3af', fontSize: 12 }}
                                            dy={10}
                                        />
                                        <YAxis hide={true} domain={['dataMin - 500', 'dataMax + 500']} />
                                        <Line
                                            type="monotone"
                                            dataKey="sales"
                                            stroke="#2dd4bf"
                                            strokeWidth={2}
                                            dot={false}
                                            activeDot={{ r: 6, fill: '#2dd4bf', stroke: '#fff', strokeWidth: 2 }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </main>
        </div>
    );
}

export default StoreDashboard;