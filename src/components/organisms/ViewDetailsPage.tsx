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
interface UserDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: (userId: string) => void;
  onDelete: (userId: string) => void;
}

export function ViewDetailsPage({
  isOpen,
  onClose,
  onEdit,
  onDelete
}: UserDetailsModalProps) {
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
            <Card className="border border-border bg-card text-white rounded-lg shadow-lg" onClick={onClose} >
                <CardContent className="p-6">
                    <div className="w-full space-y-6">
                        {/* Header */}
                        <h2 className="text-xl font-bold">View Refill Request</h2>

                        {/* Order Information */}
                        <div>
                            <h3 className="font-semibold text-purple-400 mb-2">Order Information</h3>
                            <div className="border border-white/10 rounded-lg overflow-hidden">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 divide-y divide-white/5">
                                    {[
                                        { label: 'Order ID', value: '#12348' },
                                        { label: 'Order Link', value: 'https://example.com/post/123' },
                                        { label: 'Order Status', value: 'Completed' },
                                        { label: 'Order Date', value: '2023-01-01' },
                                        { label: 'Service', value: 'Likes' },
                                        { label: 'Provider', value: 'Provider A' },
                                        { label: 'Order Cost', value: '$10' },
                                        { label: 'Refill Count', value: '2 times' },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col border-b border-white/5 px-4 py-3 last:border-0"
                                        >
                                            <span className="text-xs text-gray-400 uppercase tracking-wider">
                                                {item.label}
                                            </span>
                                            <span className="text-sm text-gray-200">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Files */}
                        <div>
                            <h3 className="font-semibold text-purple-400 mb-2">Files</h3>
                            <div className="rounded-lg p-3 text-gray-300">2023-01-01</div>
                        </div>

                        {/* Upload Refill Reason */}
                        <div>
                            <h3 className="font-semibold text-purple-400 mb-2">Upload Refill Reason</h3>
                            <div className="rounded-lg p-4 text-gray-300 leading-relaxed bg-purple-950/10">
                                The user reported that the likes dropped significantly after a few days. They provided
                                screenshots as proof of the drop and requested a refill to compensate for the lost likes.
                            </div>
                        </div>

                        {/* Provider Information */}
                        <div>
                            <h3 className="font-semibold text-purple-400 mb-2">Provider Information</h3>
                            <div className="border border-white/10 rounded-lg overflow-hidden">
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 divide-y divide-white/5">
                                    {[
                                        { label: 'Provider ID', value: '#1800' },
                                        { label: 'Provider Name', value: 'Provider A' },
                                        { label: 'Provider Status', value: 'Likes Service' },
                                        { label: 'Provider ID', value: '#1800' },
                                        { label: 'Provider Name', value: 'Provider A' },
                                        { label: 'Provider Status', value: 'Likes Service' },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex flex-col border-b border-white/5 px-4 py-3 last:border-0"
                                        >
                                            <span className="text-xs text-gray-400 uppercase tracking-wider">
                                                {item.label}
                                            </span>
                                            <span className="text-sm text-gray-200">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Notes */}
                        <div>
                            <h3 className="font-semibold text-purple-400 mb-2">Notes</h3>
                            <p className="border-2 border-purple-600 rounded-md p-3 text-gray-200 bg-purple-950/20">
                                Not worked with this provider
                            </p>
                        </div>
                    </div>
                </CardContent>
            </Card>





        </div>
    );
}
