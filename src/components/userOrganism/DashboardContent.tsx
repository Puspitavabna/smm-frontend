'use client';

import * as React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Typography } from '@/components/atoms/Typography';
import { TrendingUp, Users, UserCheck, UserPlus } from 'lucide-react';

const metricsData = [
  {
    title: 'Total Users',
    value: '1,234',
    change: '+12%',
    description: 'Since last month',
    icon: Users,
    color: 'text-blue-500'
  },
  {
    title: 'Active Users',
    value: '1,234',
    change: '+12%',
    description: 'Since last month',
    icon: UserCheck,
    color: 'text-green-500'
  },
  {
    title: 'New Users',
    value: '1,234',
    change: '+12%',
    description: 'Since last month',
    icon: UserPlus,
    color: 'text-purple-500'
  },
  {
    title: 'New Users',
    value: '1,234',
    change: '+12%',
    description: 'Since last month',
    icon: UserPlus,
    color: 'text-purple-500'
  }
];

export function DashboardContent() {
  return (
    <div className='space-y-6 p-4 sm:p-6 lg:space-y-8'>
      {/* Metrics Cards */}
      <div className="w-full flex flex-col lg:flex-row items-stretch gap-6">
        {/* Left Section (metrics grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl flex-shrink-0">
          {metricsData.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <Card
                key={index}
                className="card-hover border-gray-700 bg-gray-800 w-64 h-full"
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-300">
                    {metric.title}
                  </CardTitle>
                  <Icon className={`h-4 w-4 ${metric.color}`} />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="mt-2 flex items-center space-x-2">
                    <Badge variant="secondary" className="bg-green-100 text-green-800">
                      <TrendingUp className="mr-1 h-3 w-3" />
                      {metric.change}
                    </Badge>
                    <Typography variant="small" className="text-gray-400">
                      {metric.description}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Right Section (fills remaining width and matches height) */}
        <div className="flex-1 h-full">
          <Card className="border-gray-700 bg-gray-800 w-full h-full flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-sm font-medium text-gray-300">
                Overview & Insights
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center">
              <div className="text-2xl font-bold text-white mb-2">
               My Order Activity
              </div>
              <p className="text-gray-400 mb-4 text-sm">
                Platform activity trends over the past 6 months.
              </p>

              {/* Curved Line Chart */}
              <div className="relative h-64 w-full">
                <svg viewBox="0 0 400 200" className="w-full h-full">
                  <defs>
                    {/* Gradient fill under the curve */}
                    <linearGradient id="curveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.7" />
                      <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                    </linearGradient>
                  </defs>

                  {/* Background grid */}
                  <g stroke="#374151" strokeWidth="0.5">
                    <line x1="40" y1="20" x2="40" y2="180" />
                    <line x1="40" y1="180" x2="360" y2="180" />
                    <line x1="40" y1="140" x2="360" y2="140" opacity="0.5" />
                    <line x1="40" y1="100" x2="360" y2="100" opacity="0.5" />
                    <line x1="40" y1="60" x2="360" y2="60" opacity="0.5" />
                  </g>

                  {/* Curved Line Path */}
                  <path
                    d="M 60 150 
           C 100 120, 140 130, 180 100 
           S 260 80, 300 110 
           S 340 70, 360 90"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />

                  {/* Area Fill Under Curve */}
                  <path
                    d="M 60 150 
           C 100 120, 140 130, 180 100 
           S 260 80, 300 110 
           S 340 70, 360 90
           L 360 180 L 60 180 Z"
                    fill="url(#curveGradient)"
                  />

                  {/* Data Points */}
                  <circle cx="60" cy="150" r="4" fill="#8b5cf6" />
                  <circle cx="120" cy="130" r="4" fill="#8b5cf6" />
                  <circle cx="180" cy="100" r="4" fill="#8b5cf6" />
                  <circle cx="240" cy="85" r="4" fill="#8b5cf6" />
                  <circle cx="300" cy="110" r="4" fill="#8b5cf6" />
                  <circle cx="360" cy="90" r="4" fill="#8b5cf6" />

                  {/* X-axis labels */}
                  <text x="60" y="195" textAnchor="middle" className="fill-gray-400 text-xs">May</text>
                  <text x="120" y="195" textAnchor="middle" className="fill-gray-400 text-xs">Jun</text>
                  <text x="180" y="195" textAnchor="middle" className="fill-gray-400 text-xs">Jul</text>
                  <text x="240" y="195" textAnchor="middle" className="fill-gray-400 text-xs">Aug</text>
                  <text x="300" y="195" textAnchor="middle" className="fill-gray-400 text-xs">Sep</text>
                  <text x="360" y="195" textAnchor="middle" className="fill-gray-400 text-xs">Oct</text>
                </svg>
              </div>
            </CardContent>

          </Card>
        </div>
      </div>





      {/* User Activity Section */}
      <div>

        <div className="grid grid-cols-1 lg:grid-cols-[4fr_1fr] gap-6">
          {/* Left Side: Table */}
          <Card className="border-gray-700 bg-gray-800 text-white">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-white">Orders</CardTitle>
                  <p className="text-gray-400 text-sm">Last 10 Transactions</p>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  +15%
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-700 text-gray-300">
                      <th className="py-2 px-4 text-left">ID</th>
                      <th className="py-2 px-4 text-left">DateTime</th>
                      <th className="py-2 px-4 text-left">Link</th>
                      <th className="py-2 px-4 text-left">Charge</th>
                      <th className="py-2 px-4 text-left">Quantity</th>
                      <th className="py-2 px-4 text-left">Service</th>
                      <th className="py-2 px-4 text-left">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      {
                        id: "001",
                        date: "2025-10-11 10:00",
                        link: "https://example.com",
                        charge: "$12",
                        qty: 100,
                        service: "Instagram Likes",
                        status: "Completed",
                      },
                      {
                        id: "002",
                        date: "2025-10-10 15:22",
                        link: "https://example2.com",
                        charge: "$8",
                        qty: 50,
                        service: "YouTube Views",
                        status: "Pending",
                      },
                    ].map((row, i) => (
                      <tr
                        key={i}
                        className="border-b border-gray-700 hover:bg-gray-700/50"
                      >
                        <td className="py-2 px-4">{row.id}</td>
                        <td className="py-2 px-4">{row.date}</td>
                        <td className="py-2 px-4 truncate max-w-[120px]">
                          <a
                            href={row.link}
                            className="text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            {row.link}
                          </a>
                        </td>
                        <td className="py-2 px-4">{row.charge}</td>
                        <td className="py-2 px-4">{row.qty}</td>
                        <td className="py-2 px-4">{row.service}</td>
                        <td
                          className={`py-2 px-4 ${row.status === "Completed"
                            ? "text-green-400"
                            : "text-yellow-400"
                            }`}
                        >
                          {row.status}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Right Side: Donut Chart */}
          <Card className="border-gray-700 bg-gray-800 flex flex-col items-center justify-center">
            <CardHeader>
              <CardTitle className="text-white text-center">Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="relative flex items-center justify-center">
                <svg viewBox="0 0 36 36" className="w-40 h-40">
                  <path
                    className="text-gray-700"
                    stroke="currentColor"
                    strokeWidth="3"
                    fill="none"
                    d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <path
                    className="text-purple-500"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray="70, 30"
                    strokeLinecap="round"
                    fill="none"
                    d="M18 2.0845
                a 15.9155 15.9155 0 0 1 0 31.831
                a 15.9155 15.9155 0 0 1 0 -31.831"
                  />
                  <text
                    x="18"
                    y="20.35"
                    className="fill-white text-sm"
                    textAnchor="middle"
                  >
                    70%
                  </text>
                </svg>
              </div>
              <div className="mt-4 text-center text-gray-300">
                <p>Completed Orders</p>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>


    </div>
  );
}
