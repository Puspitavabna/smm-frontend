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

interface ServiceSendProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: (userId: string) => void;
  onDelete: (userId: string) => void;
}

export function ServiceSend({
  isOpen,
  onClose,
  onEdit,
  onDelete,
}: ServiceSendProps) {
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

  const handleSendRequest = () => {
    console.log('Send request to Telegram');
    // Implement send request functionality here
  };

  return (
    <div className="space-y-6 p-4 sm:p-6 lg:space-y-8">
      {/* Users Table */}
      <Card className="border border-border bg-card text-white rounded-lg shadow-lg">
        <CardContent className="p-6">
          <div className="w-full space-y-6">
            {/* Header */}
            <h2 className="text-xl font-bold">For Service Adding Request</h2>

            {/* Content */}
            <Card className="border border-white/10 bg-gradient-to-b from-purple-950/80 to-black/80 rounded-lg text-center p-6">
              <CardContent className="space-y-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center">
                    <span className="text-3xl text-purple-300">📨</span>
                  </div>
                </div>
                <Typography className="text-gray-200">
                  For Service Adding Request Send message On Telegram like indicated below
                </Typography>
                <Button
                  onClick={handleSendRequest}
                  className="bg-purple-700 hover:bg-purple-800 text-white rounded-full px-6 py-2 font-medium transition"
                >
                  Send Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}