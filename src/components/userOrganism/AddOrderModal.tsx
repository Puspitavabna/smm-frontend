'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { Badge } from '@/components/ui/badge';
import { Avatar } from '@/components/ui/avatar';
import { Eye, Edit2, Trash2, Download } from 'lucide-react';
import { UserDetailsModal } from '@/components/organisms/UserDetailsModal';

interface ViewDetailsPageProps {
  isOpen: boolean;
  onClose: () => void;
  onEdit: (userId: string) => void;
  onDelete: (userId: string) => void;
}

export function AddOrderModal() {
  const [selectedUser, setSelectedUser] = React.useState<(typeof mockUsers)[0] | null>(null);

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
            <h2 className="text-xl font-bold">New Orders</h2>

            {/* Order Form */}
            <Card className="border border-white/10 bg-gradient-to-b from-purple-950/80 to-black/80 rounded-lg">
              <CardContent className="p-6 space-y-6">
                <form className="space-y-6">
                  {/* Category */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Category</label>
                    <select
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                    >
                      <option value="instagram">instagram [26k+ followers] [Flag: off]</option>
                    </select>
                  </div>

                  {/* By Population */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">By Population</label>
                    <select
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                    >
                      <option value="price_4">instagram followers [26k+ followers] [1 Hrs] [90%] $10 per day 1000</option>
                    </select>
                  </div>

                  {/* Service */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Service</label>
                    <input
                      type="text"
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      placeholder="The Flag Review option must be disabled before ordering"
                    />
                  </div>

                  {/* Description */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Description</label>
                    <textarea
                      rows={3}
                      className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      placeholder="The Flag Review option must be disabled before ordering. Follow these steps to disable the option: Turn off your Instagram account settings. Sign out to remove friends. Check Screenshot https://PMH#dGq52. Time: 10 Minutes."
                    />
                  </div>

                  {/* Alerts */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Alerts</label>
                    <div className="space-y-1">
                      <p className="text-xs text-yellow-400">✔ Speed Upload (90%)</p>
                      <p className="text-xs text-yellow-400">✔ Time: 10 Minutes</p>
                      <p className="text-xs text-yellow-400">✔ Drop Fix (90%)</p>
                      <p className="text-xs text-red-400">⚠ Not Enough</p>
                      <p className="text-xs text-red-400">⚠ Cancel Active</p>
                    </div>
                  </div>

                  {/* Accepted Formats */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Accepted Formats</label>
                    <p className="text-xs text-yellow-400">⚠ You must upload a format [video/image] before ordering the followers end-in-the flag section. Then the system must be manually accessibility used. We don’t provide any flag section.</p>
                  </div>

                  {/* Average Time */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Average Time</label>
                    <input
                      type="text"
                      readOnly
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      placeholder="Not Enough Data"
                    />
                  </div>

                  {/* Link */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Link</label>
                    <input
                      type="text"
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      placeholder="https://instagram.com/example"
                    />
                  </div>

                  {/* Quantity */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Quantity</label>
                    <input
                      type="text"
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      placeholder=""
                    />
                  </div>

                  {/* Charge */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Charge</label>
                    <input
                      type="text"
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      placeholder="Your rank based discount has been applied - [5%]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex justify-end pt-2">
                    <Button
                      type="submit"
                      className="bg-purple-700 hover:bg-purple-800 text-white rounded-md px-6 py-2 font-medium transition"
                    >
                      Submit
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