import React, { useState } from 'react';
import { Modal } from './Modal';

interface PauseTicketDialogProps {
  isOpen: boolean;
  onClose: () => void;
  ticketId: string;
}

export const PauseTicketDialog: React.FC<PauseTicketDialogProps> = ({ isOpen, onClose, ticketId }) => {
  const [reason, setReason] = useState('');

  const handlePause = () => {
    console.log(`Pausing ticket ${ticketId} with reason: ${reason}`);
    onClose();
    setReason('');
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Pause Ticket">
      <div className="space-y-4">
        <p className="text-gray-600">Are you sure you want to pause ticket {ticketId}?</p>
        <textarea
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Reason for pausing (optional)"
          className="w-full p-2 border border-gray-300 rounded-md"
          rows={3}
        />
        <div className="flex space-x-3">
          <button
            onClick={handlePause}
            className="flex-1 bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700"
          >
            Pause Ticket
          </button>
          <button
            onClick={onClose}
            className="flex-1 bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};