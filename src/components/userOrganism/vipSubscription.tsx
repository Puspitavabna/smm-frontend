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


export function VipSubscription() {
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
        <div className='space-y-6 p-4 sm:p-6 lg:space-y-8'>

            {/* Users Table */}
            {/* Membership Plans Section */}
            <Card className="border border-border bg-card rounded-lg shadow-lg">
                <CardHeader>
                    <CardTitle className="text-xl font-bold text-purple-400">Be Membership</CardTitle>
                    <p className="text-gray-400 text-sm">Upgrade your experience and unlock exclusive features with our premium Membership plans. All a subscription is deducted from your balance.</p>
                </CardHeader>
                <CardContent className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {/* Free Plan */}
                    <div className="bg-purple-900 p-6 rounded-lg text-center">
                        <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-white">🎉</span>
                        </div>
                        <h3 className="text-lg font-semibold">Free</h3>
                        <p className="text-sm text-gray-400 mb-4">Unlimited access to basic features</p>
                        <ul className="text-sm text-gray-300 space-y-2 mb-4">
                            <li>✔ Discover new and exciting features</li>
                            <li>✔ Access to limited benefits</li>
                        </ul>
                        <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">Join Now</Button>
                    </div>

                    {/* Ready Plan */}
                    <div className="bg-purple-900 p-6 rounded-lg text-center">
                        <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-white">💡</span>
                        </div>
                        <h3 className="text-lg font-semibold">Ready Plan</h3>
                        <p className="text-sm text-gray-400 mb-4">$10/mth</p>
                        <ul className="text-sm text-gray-300 space-y-2 mb-4">
                            <li>✔ Discover new features</li>
                            <li>✔ Boost basic benefits</li>
                            <li>✔ Team or daily promotion</li>
                            <li>✔ Access to limited offers</li>
                        </ul>
                        <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">Subscribe</Button>
                    </div>

                    {/* Max Plan */}
                    <div className="bg-purple-900 p-6 rounded-lg text-center">
                        <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-white">⭐</span>
                        </div>
                        <h3 className="text-lg font-semibold">Max Plan</h3>
                        <p className="text-sm text-gray-400 mb-4">$45/month</p>
                        <ul className="text-sm text-gray-300 space-y-2 mb-4">
                            <li>✔ Elite features</li>
                            <li>✔ Early access to updates</li>
                            <li>✔ Boost all benefits</li>
                            <li>✔ Dedicated support assistant</li>
                        </ul>
                        <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">Subscribe</Button>
                    </div>

                    {/* Elite Plan */}
                    <div className="bg-purple-900 p-6 rounded-lg text-center">
                        <div className="w-12 h-12 bg-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <span className="text-white">👑</span>
                        </div>
                        <h3 className="text-lg font-semibold">Elite</h3>
                        <p className="text-sm text-gray-400 mb-4">$50/month</p>
                        <ul className="text-sm text-gray-300 space-y-2 mb-4">
                            <li>✔ All premium benefits</li>
                            <li>✔ Exclusive offers</li>
                            <li>✔ VIP access to updates</li>
                            <li>✔ Access to private bots</li>
                        </ul>
                        <Button className="w-full bg-purple-700 hover:bg-purple-800 text-white">Join Now</Button>
                    </div>
                </CardContent>
            </Card>





        </div>
    );
}
