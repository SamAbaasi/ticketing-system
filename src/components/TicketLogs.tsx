import React from 'react';
import { TicketLog } from '../types';

interface TicketLogsProps {
  logs: TicketLog[];
}

export const TicketLogs: React.FC<TicketLogsProps> = ({ logs }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Activity Logs</h2>
      <div className="space-y-4">
        {logs.map((log) => (
          <div key={log.id} className="border-l-4 border-blue-500 pl-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{log.action}</p>
                <p className="text-sm text-gray-600">{log.details}</p>
              </div>
              <div className="text-right text-sm text-gray-500">
                <p>{log.user}</p>
                <p>{log.timestamp}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};