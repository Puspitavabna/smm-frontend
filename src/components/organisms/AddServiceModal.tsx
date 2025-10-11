
'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { X } from 'lucide-react';

interface AddServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (formData: FormData) => void;
}

export function AddServiceModal({ isOpen, onClose, onSave }: AddServiceModalProps) {
  const [serviceName, setServiceName] = React.useState('');
  const [type, setType] = React.useState('Default');
  const [status, setStatus] = React.useState('Active');
  const [amount, setAmount] = React.useState('');
  const [minQuantity, setMinQuantity] = React.useState('');
  const [maxQuantity, setMaxQuantity] = React.useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('serviceName', serviceName);
    formData.append('type', type);
    formData.append('status', status);
    formData.append('amount', amount);
    formData.append('minQuantity', minQuantity);
    formData.append('maxQuantity', maxQuantity);
    onSave(formData);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <Card
          className="
      w-full 
      max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 
      bg-gradient-to-b from-purple-950/80 to-black/80 
      border border-white/10 text-gray-200 rounded-xl shadow-2xl
    "
        >
          <CardHeader className="relative pb-2">
            <Typography variant="h5" className="text-purple-300 font-semibold">
              Add New Service
            </Typography>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="absolute top-0 right-0 text-gray-400 hover:text-white"
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Name */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-400">Service Name</label>
                <select
                  value={serviceName}
                  onChange={(e) => setServiceName(e.target.value)}
                  className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                >
                  <option value="">Select Service</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Twitter">Twitter</option>
                </select>
              </div>

              {/* Type */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-400">Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                >
                  <option value="Default">Default</option>
                  <option value="Dripfeed">Dripfeed</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>

              {/* Status */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-400">Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>

              {/* Amount */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-400">Amount</label>
                <input
                  type="text"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="Instagram"
                  className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-700"
                />
              </div>

              {/* Min Quantity */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-400">Min. Quantity</label>
                <input
                  type="text"
                  value={minQuantity}
                  onChange={(e) => setMinQuantity(e.target.value)}
                  placeholder="Instagram"
                  className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-700"
                />
              </div>

              {/* Max Quantity */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-400">Max. Quantity</label>
                <input
                  type="text"
                  value={maxQuantity}
                  onChange={(e) => setMaxQuantity(e.target.value)}
                  placeholder="Instagram"
                  className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-sm text-gray-100 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-700"
                />
              </div>

              {/* Save Button */}
              <div className="flex justify-end pt-2">
                <Button
                  type="submit"
                  className="bg-purple-700 hover:bg-purple-800 text-white rounded-md px-6 py-2 font-medium transition"
                >
                  Save
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
}