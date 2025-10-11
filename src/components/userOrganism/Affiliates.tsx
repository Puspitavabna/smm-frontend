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
    address: '1615 Swaniawski Neck, Provo',
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
    address: '1615 Swaniawski Neck, Provo',
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
    address: '1615 Swaniawski Neck, Provo',
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
    address: '1615 Swaniawski Neck, Provo',
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
    address: '1615 Swaniawski Neck, Provo',
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
    address: '1615 Swaniawski Neck, Provo',
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
    address: '1615 Swaniawski Neck, Provo',
  },
];

interface AffiliatesProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: (userId: string) => void;
  onDelete: (userId: string) => void;
}

export function Affiliates() {
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
    <div className="space-y-6 p-4 sm:p-6 lg:space-y-8">
      {/* Users Table */}
      <Card className="border border-border bg-card text-white rounded-lg shadow-lg">
        <CardContent className="p-6">
          <div className="w-full space-y-6">
            {/* Header */}
            <h2 className="text-xl font-bold">Order Details</h2>

            {/* Order Information */}
            <div>
              <h3 className="font-semibold text-purple-400 mb-2">Order Information</h3>
              <div className="border border-white/10 rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-6 divide-y divide-white/5">
                  {[
                    { label: 'Order ID', value: '#12345' },
                    { label: 'Order Link', value: 'https://t.me/ChannelName' },
                    { label: 'Order Status', value: 'Processing' },
                    { label: 'Order Date', value: '10/11/2025' },
                    { label: 'Service', value: 'Telegram Members' },
                    { label: 'Provider', value: 'Provider X' },
                    { label: 'Order Cost', value: '$50' },
                    { label: 'Refill Count', value: '0 times' },
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

            {/* Order Form */}
            <Card className="border border-white/10 bg-gradient-to-b from-purple-950/80 to-black/80 rounded-lg">
              <CardContent className="p-6 space-y-6">
                <form className="space-y-6">
                  {/* Category */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Category</label>
                    <input
                      type="text"
                      value="Telegram Members (Max: 100K) [No Drop] (80 Days Refill) | 100K per Day"
                      readOnly
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                    />
                  </div>

                  {/* Description */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Description</label>
                    <textarea
                      rows={6}
                      readOnly
                      className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      value={`
                        ⚠ The Flag Review option must be disabled before ordering
                        - Follow these steps to disable the option
                        - Scroll down to 'Followers' and 'Friends'
                        - Turn off the Flag Review option
                        - Check Screenshot: https://PMH#dGq52
                        ✅ Start Time: 0-5 Minutes
                        ✅ Drop Fix: 90% (Depending on Telegram updates)
                        ⏳ Refill: 80 Days
                        ⚠ Cancel button active
                        ⚠ Accepted Link Formats: https://t.me/ChannelName OR enter your Username only (without @)
                        ⚠ You do not turn off the Flag Review option before ordering, the members will end up in the
                        flag section. Then the system must be manually accessibility used. We DON’T provide any
                        Guarantees, Refill, or Refund in this case if the server is overloaded
                        ⚠ Delays in speed/time may occur if the server is overloaded
                      `}
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex justify-end pt-2 space-x-4">
                    <Button
                      type="button"
                      className="bg-gray-700 hover:bg-gray-800 text-white rounded-md px-6 py-2 font-medium transition"
                    >
                      Close
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}