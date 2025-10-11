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

export function BulkOrder() {

  // Mock user data


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
              
            {/* Order Form */}
            <Card className="border border-white/10 bg-gradient-to-b from-purple-950/80 to-black/80 rounded-lg">
              <CardContent className="p-6 space-y-6">
            <h2 className="text-xl font-bold">Mass Order</h2>

                <form className="space-y-6">
        

                  {/* Amount */}
                  <div className="flex flex-col space-y-2">
                    <label className="text-sm font-medium text-gray-400">Amount</label>
                    <input
                      type="text"
                      className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                      placeholder=""
                    />
                  </div>

             
                  {/* Submit Button */}
                  <div className="flex justify-end pt-2">
                    <Button
                      type="submit"
                      className="bg-purple-800 hover:bg-purple-900 text-white rounded-full px-6 py-2 font-medium transition"
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