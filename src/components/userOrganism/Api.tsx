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
  // ... (other mock users remain unchanged)
];



export function Api() {
  const [selectedUser, setSelectedUser] = React.useState<(typeof mockUsers)[0] | null>(null);
  const [apiKey, setApiKey] = React.useState('');

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
    <div className="space-y-6 p-4 sm:p-6 lg:space-y-8 text-white bg-gray-900">
      {/* API Documentation Section */}
      <Card className="border border-border bg-card rounded-lg shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-purple-400">API Documentation</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Info label="HTTP Method" value="POST" />
            <Info label="API URL" value="https://example.com/api/v2" />
            {/* <Info label="API Key" value={<input type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)} className="mt-1 w-full p-2 bg-gray-700 rounded border border-gray-600 text-white" placeholder="Enter API Key" />} /> */}
            <Info label="Response Key Format" value="JSON" />
          </div>

          <div>
            <h3 className="font-semibold text-purple-400 mb-2">Service List</h3>
            <Info label="May" value="https://example.com/api/v2" />
            <Info label="Action" value="Services" />
          </div>

          <div>
            <h3 className="font-semibold text-purple-400 mb-2">Parameters</h3>
            <Info label="May" value="https://example.com/api/v2" />
            <Info label="Action" value="Services" />
          </div>

          <div>
            <h3 className="font-semibold text-purple-400 mb-2">Example Response</h3>
            <pre className="bg-gray-800 p-4 rounded-lg text-gray-200">
              {`{
  "status": true,
  "message": "success",
  "category": "text",
  "quantity": "1000",
  "price": "50",
  "start_count": "0",
  "remains": "1000",
  "min": "100",
  "max": "10000",
  "cancel": true
}`}
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Existing Users Table Section remains unchanged */}
      
    </div>
  );
}