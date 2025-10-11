'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { X } from 'lucide-react';

interface AddCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (formData: FormData) => void;
}

export function AddCategoryModal({ isOpen, onClose, onSave }: AddCategoryModalProps) {
  const [categoryName, setCategoryName] = React.useState('');
  const [status, setStatus] = React.useState('Active');
  const [description, setDescription] = React.useState('');
  const [icon, setIcon] = React.useState<File | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('categoryName', categoryName);
    formData.append('status', status);
    formData.append('description', description);
    if (icon) formData.append('icon', icon);
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
              Add New Category
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
              {/* Category Name */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-400">Category Name</label>
                <select
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                >
                  <option value="">Select Category</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="YouTube">YouTube</option>
                  <option value="Twitter">Twitter</option>
                </select>
              </div>

              {/* Upload Icon */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-400">
                  Upload Icon (JPEG, JPG, PNG)
                </label>
                <div className="flex flex-col items-center justify-center border border-dashed border-white/20 rounded-lg p-6 bg-black/20">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => setIcon(e.target.files?.[0] || null)}
                    className="hidden"
                    id="icon-upload"
                  />
                  <label
                    htmlFor="icon-upload"
                    className="cursor-pointer text-sm text-purple-400 hover:underline"
                  >
                    Choose Image
                  </label>
                  <p className="text-xs text-gray-500 mt-1">
                    {icon ? icon.name : 'No file chosen'}
                  </p>
                </div>
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

              {/* Description */}
              <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-400">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Instagram services like followers..."
                  rows={3}
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
