import React from 'react';
import { AlertCircle } from 'lucide-react';
import { Modal } from './Modal';

interface ConflictDialogProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
}

export const ConflictDialog: React.FC<ConflictDialogProps> = ({ isOpen, onClose, message }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Workflow Conflict">
      <div className="space-y-4">
        <div className="flex items-center space-x-2 text-red-600">
          <AlertCircle size={20} />
          <span className="font-medium">DMN Rule Violation</span>
        </div>
        <p className="text-gray-600">{message}</p>
        <button
          onClick={onClose}
          className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          OK
        </button>
      </div>
    </Modal>
  );
};