import React from 'react';
import { Modal } from './Modal';
import { StatusBadge } from '../../utils/badges';
import { Ticket } from '../../types';

interface RelatedTicketsProps {
  isOpen: boolean;
  onClose: () => void;
  tickets: Ticket[];
}

export const RelatedTickets: React.FC<RelatedTicketsProps> = ({ isOpen, onClose, tickets }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Related Tickets">
      <div className="space-y-3">
        {tickets.map((ticket) => (
          <div key={ticket.id} className="p-3 border border-gray-200 rounded-md">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{ticket.id}</p>
                <p className="text-sm text-gray-600">{ticket.title}</p>
              </div>
              <StatusBadge status={ticket.status} />
            </div>
          </div>
        ))}
        <button
          onClick={onClose}
          className="w-full bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};