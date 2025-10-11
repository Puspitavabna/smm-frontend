'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/atoms/Button';
import { Typography } from '@/components/atoms/Typography';
import { X } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface AddProviderModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (formData: FormData) => void;
}

export function AddProviderModal({ isOpen, onClose, onSave }: AddProviderModalProps) {
    const [providerName, setProviderName] = React.useState('');
    const [apiUrl, setApiUrl] = React.useState('');
    const [apiKey, setApiKey] = React.useState('');
    const [status, setStatus] = React.useState('Default');
    const [syncServices, setSyncServices] = React.useState('No');
    const [triggerApiCheck, setTriggerApiCheck] = React.useState(false);

    // Disable scroll when modal is open
    React.useEffect(() => {
        if (isOpen) document.body.style.overflow = 'hidden';
        else document.body.style.overflow = '';
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('providerName', providerName);
        formData.append('apiUrl', apiUrl);
        formData.append('apiKey', apiKey);
        formData.append('status', status);
        formData.append('syncServices', syncServices);
        formData.append('triggerApiCheck', triggerApiCheck.toString());
        onSave(formData);
        onClose();
    };

    const handleTestConnection = () => {
        console.log('Testing connection with:', { apiUrl, apiKey });
        // Implement connection test logic here
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
            max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl xl:max-w-4xl 
            bg-gradient-to-b from-purple-950/80 to-black/80 
            border border-white/10 text-gray-200 rounded-xl shadow-2xl
          "
                >
                    <CardHeader className="relative pb-2">
                        <Typography variant="h5" className="text-purple-300 font-semibold">
                            Add New Provider
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
                            {/* Provider Name */}
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-medium text-gray-400">Provider Name</label>
                                <Input
                                    type="text"
                                    value={providerName}
                                    onChange={(e) => setProviderName(e.target.value)}
                                    placeholder="Enter provider name"
                                    className="bg-black/30 border border-white/10 text-gray-100 placeholder-gray-500 focus:ring-purple-700"
                                />
                            </div>

                            {/* API URL */}
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-medium text-gray-400">API URL</label>
                                <Input
                                    type="url"
                                    value={apiUrl}
                                    onChange={(e) => setApiUrl(e.target.value)}
                                    placeholder="https://api.provider.com"
                                    className="bg-black/30 border border-white/10 text-gray-100 placeholder-gray-500 focus:ring-purple-700"
                                />
                            </div>

                            {/* API Key */}
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-medium text-gray-400">API Key</label>
                                <Input
                                    type="password"
                                    value={apiKey}
                                    onChange={(e) => setApiKey(e.target.value)}
                                    placeholder="Enter API key"
                                    className="bg-black/30 border border-white/10 text-gray-100 placeholder-gray-500 focus:ring-purple-700"
                                />
                            </div>

                            {/* Status */}
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-medium text-gray-400">Status</label>
                                <select
                                    value={status}
                                    onChange={(e) => setStatus(e.target.value)}
                                    className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                                >
                                    <option value="Default">Default</option>
                                    <option value="Active">Active</option>
                                    <option value="Inactive">Inactive</option>
                                </select>
                            </div>

                            {/* Sync Services Automatically */}
                            <div className="flex flex-col space-y-2">
                                <label className="text-sm font-medium text-gray-400">
                                    Sync Services Automatically
                                </label>
                                <select
                                    value={syncServices}
                                    onChange={(e) => setSyncServices(e.target.value)}
                                    className="w-full bg-black/30 border border-white/10 rounded-md px-3 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-700"
                                >
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
                                </select>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-3 pt-4">
                                <Button
                                    type="button"
                                    onClick={handleTestConnection}
                                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white rounded-md py-2 font-medium transition"
                                >
                                    Test Connection
                                </Button>
                                <Button
                                    type="submit"
                                    className="flex-1 bg-purple-700 hover:bg-purple-800 text-white rounded-md py-2 font-medium transition"
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
