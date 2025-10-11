'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Eye, Edit2, Trash2, Download } from 'lucide-react';
import { UserDetailsModal } from '@/components/organisms/UserDetailsModal';

// Mock user data
const mockUsers = [
    {
        id: '6758',
        image: '/api/placeholder/40/40',
        name: 'Nichole Volkman',
        email: 'abc@gmail.com',
        phone: '0340 9876543',
        balance: '$1,250.00',
        totalOrders: '47',
        status: 'Active',
        joinDate: '07/05/2018',
        lastLogin: '2 hours ago',
        ticketsSubmitted: '3',
        password: '••••••••',
        address: '1615 Swaniawski Neck, Provo'
    },
    {
        id: '6759',
        image: '/api/placeholder/40/40',
        name: 'Jane Smith',
        email: 'jane.smith@gmail.com',
        phone: '0340 9876543',
        balance: '$890.50',
        totalOrders: '23',
        status: 'offline',
        joinDate: '07/05/2018',
        lastLogin: '1 day ago',
        ticketsSubmitted: '1',
        password: '••••••••',
        address: '1615 Swaniawski Neck, Provo'
    },
    {
        id: '6760',
        image: '/api/placeholder/40/40',
        name: 'Mike Johnson',
        email: 'mike.j@gmail.com',
        phone: '0340 9876543',
        balance: '$2,100.75',
        totalOrders: '89',
        status: 'Active',
        joinDate: '07/05/2018',
        lastLogin: '5 minutes ago',
        ticketsSubmitted: '7',
        password: '••••••••',
        address: '1615 Swaniawski Neck, Provo'
    },
    {
        id: '6761',
        image: '/api/placeholder/40/40',
        name: 'Sarah Wilson',
        email: 'sarah.w@gmail.com',
        phone: '0340 9876543',
        balance: '$450.25',
        totalOrders: '12',
        status: 'offline',
        joinDate: '07/05/2018',
        lastLogin: '3 days ago',
        ticketsSubmitted: '0',
        password: '••••••••',
        address: '1615 Swaniawski Neck, Provo'
    },
    {
        id: '6762',
        image: '/api/placeholder/40/40',
        name: 'David Brown',
        email: 'david.brown@gmail.com',
        phone: '0340 9876543',
        balance: '$3,200.00',
        totalOrders: '156',
        status: 'Active',
        joinDate: '07/05/2018',
        lastLogin: '30 minutes ago',
        ticketsSubmitted: '12',
        password: '••••••••',
        address: '1615 Swaniawski Neck, Provo'
    },
    {
        id: '6763',
        image: '/api/placeholder/40/40',
        name: 'Emily Davis',
        email: 'emily.d@gmail.com',
        phone: '0340 9876543',
        balance: '$750.80',
        totalOrders: '34',
        status: 'offline',
        joinDate: '07/05/2018',
        lastLogin: '2 weeks ago',
        ticketsSubmitted: '2',
        password: '••••••••',
        address: '1615 Swaniawski Neck, Provo'
    },
    {
        id: '6764',
        image: '/api/placeholder/40/40',
        name: 'Chris Taylor',
        email: 'chris.t@gmail.com',
        phone: '0340 9876543',
        balance: '$1,875.40',
        totalOrders: '67',
        status: 'Active',
        joinDate: '07/05/2018',
        lastLogin: '1 hour ago',
        ticketsSubmitted: '5',
        password: '••••••••',
        address: '1615 Swaniawski Neck, Provo'
    }
];


export function ChildPanel() {
    const [selectedUser, setSelectedUser] = React.useState<(typeof mockUsers)[0] | null>(null);



    const handleEdit = (userId: string) => {
        console.log('Edit user:', userId);
        // Add edit user functionality here
    };

    const handleDelete = (userId: string) => {
        console.log('Delete user:', userId);
        // Add delete user functionality here
        if (window.confirm('Are you sure you want to delete this user?')) {
            // Implement delete functionality
        }
    };

    const handleExport = () => {
        console.log('Export users data');
        // Add export functionality here
    };

    const Info = ({ label, value }: { label: string; value: string }) => (
        <div>
            <p className="text-gray-400 text-sm">{label}</p>
            <p className="font-medium text-gray-100">{value}</p>
        </div>
    );
    return (
        <div className="space-y-6 p-4 sm:p-6 lg:space-y-8 bg-gray-900 text-white">
            {/* Step Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Card 1 */}
                <div className="bg-purple-800 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold">Step 1</h3>
                    <p className="text-sm">Enter Your Domain</p>
                    <div className="mt-2 bg-purple-700 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                        🌐
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-purple-800 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold">Step 2</h3>
                    <p className="text-sm">Select Website Currency</p>
                    <div className="mt-2 bg-purple-700 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                        💰
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-purple-800 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold">Step 3</h3>
                    <p className="text-sm">Enter username</p>
                    <div className="mt-2 bg-purple-700 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                        👤
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-purple-800 p-4 rounded-lg text-center">
                    <h3 className="text-lg font-semibold">Step 4</h3>
                    <p className="text-sm">Enter Password</p>
                    <div className="mt-2 bg-purple-700 rounded-full w-12 h-12 mx-auto flex items-center justify-center">
                        🔒
                    </div>
                </div>
            </div>

            {/* Form */}
            <div className="bg-gray-800 p-6 rounded-lg">
                <form>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Enter Cred ID</label>
                            <input
                                type="text"
                                className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600"
                                // value="child.panels.form.domain"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Info</label>
                            <input
                                type="text"
                                className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600"
                                // value="nst.supergrow.online"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Domain</label>
                            <input
                                type="text"
                                className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600"
                                // value="child.panels.form.domain"
                            />
                        </div>
                    </div>
                    
                </form>

                  <form>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Enter Cred ID</label>
                            <input
                                type="text"
                                className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600"
                                // value="child.panels.form.domain"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Info</label>
                            <input
                                type="text"
                                className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600"
                                // value="nst.supergrow.online"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Domain</label>
                            <input
                                type="text"
                                className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600"
                                // value="child.panels.form.domain"
                            />
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>
    );
}
