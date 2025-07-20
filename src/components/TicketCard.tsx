import React from 'react';
import { Eye, Pause, User, Calendar, Tag, GitBranch, Activity } from 'lucide-react';
import { StatusBadge, PriorityBadge } from '../utils/badges';
import { Ticket } from '../types';

interface TicketCardProps {
  ticket: Ticket;
  onView: (id: string) => void;
  onPreview: (id: string) => void;
  onPause: (id: string) => void;
  onRelated: (id: string) => void;
}

export const TicketCard: React.FC<TicketCardProps> = ({ 
  ticket, 
  onView, 
  onPreview, 
  onPause, 
  onRelated 
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{ticket.title}</h3>
          <p className="text-sm text-gray-500">{ticket.id}</p>
        </div>
        <div className="flex space-x-2">
          <StatusBadge status={ticket.status} />
          <PriorityBadge priority={ticket.priority} />
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
        <div className="flex items-center text-gray-600">
          <User size={16} className="mr-2" />
          {ticket.assignee}
        </div>
        <div className="flex items-center text-gray-600">
          <Calendar size={16} className="mr-2" />
          {ticket.created}
        </div>
        <div className="flex items-center text-gray-600">
          <Tag size={16} className="mr-2" />
          {ticket.category}
        </div>
      </div>
      
      <p className="text-gray-600 text-sm mb-4 line-clamp-2">{ticket.description}</p>
      
      <div className="flex space-x-2">
        <button
          onClick={() => onView(ticket.id)}
          className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md text-sm hover:bg-blue-700"
        >
          <Eye size={16} className="mr-1" />
          View
        </button>
        <button
          onClick={() => onPreview(ticket.workflowId)}
          className="flex items-center px-3 py-2 bg-green-600 text-white rounded-md text-sm hover:bg-green-700"
        >
          <GitBranch size={16} className="mr-1" />
          Workflow
        </button>
        <button
          onClick={() => onPause(ticket.id)}
          className="flex items-center px-3 py-2 bg-yellow-600 text-white rounded-md text-sm hover:bg-yellow-700"
        >
          <Pause size={16} className="mr-1" />
          Pause
        </button>
        <button
          onClick={() => onRelated(ticket.id)}
          className="flex items-center px-3 py-2 bg-purple-600 text-white rounded-md text-sm hover:bg-purple-700"
        >
          <Activity size={16} className="mr-1" />
          Related
        </button>
      </div>
    </div>
  );
};