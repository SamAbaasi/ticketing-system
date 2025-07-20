import React from 'react';
import { Paperclip } from 'lucide-react';
import { Attachment } from '../types';

interface AttachmentsProps {
  attachments: Attachment[];
}

export const Attachments: React.FC<AttachmentsProps> = ({ attachments }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Attachments</h2>
      <div className="space-y-3">
        {attachments.map((attachment) => (
          <div key={attachment.id} className="flex items-center justify-between p-3 border border-gray-200 rounded-md">
            <div className="flex items-center">
              <Paperclip size={20} className="text-gray-400 mr-3" />
              <div>
                <p className="font-medium">{attachment.name}</p>
                <p className="text-sm text-gray-500">
                  {attachment.size} • Uploaded by {attachment.uploadedBy} on {attachment.uploadedAt}
                </p>
              </div>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm">
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};