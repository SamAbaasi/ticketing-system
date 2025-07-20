import React from 'react';
import { StatusBadge, PriorityBadge } from '../utils/badges';
import { Ticket } from '../types';

interface TicketBasicInfoProps {
  ticket: Ticket;
}

export const TicketBasicInfo: React.FC<TicketBasicInfoProps> = ({ ticket }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Ticket Information</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium text-gray-500">Ticket ID</label>
          <p className="text-lg">{ticket.id}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">Status</label>
          <div className="mt-1">
            <StatusBadge status={ticket.status} />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">Priority</label>
          <div className="mt-1">
            <PriorityBadge priority={ticket.priority} />
          </div>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">Assignee</label>
          <p className="text-lg">{ticket.assignee}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">Category</label>
          <p className="text-lg">{ticket.category}</p>
        </div>
        <div>
          <label className="text-sm font-medium text-gray-500">Created</label>
          <p className="text-lg">{ticket.created}</p>
        </div>
      </div>
      <div className="mt-4">
        <label className="text-sm font-medium text-gray-500">Description</label>
        <p className="mt-1 text-gray-900">{ticket.description}</p>
      </div>
    </div>
  );
};