import React, { useState } from 'react';
import { FormData } from '../types';

interface FormRendererProps {
  onSubmit: (data: FormData) => void;
}

export const FormRenderer: React.FC<FormRendererProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    category: 'IT',
    priority: 'Medium',
    description: '',
    assignee: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
        <input
          type="text"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          required
        />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
          <select
            value={formData.category}
            onChange={(e) => setFormData({ ...formData, category: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="IT">IT</option>
            <option value="Maintenance">Maintenance</option>
            <option value="Finance">Finance</option>
            <option value="HR">HR</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
          <select
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Assignee</label>
        <input
          type="text"
          value={formData.assignee}
          onChange={(e) => setFormData({ ...formData, assignee: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          placeholder="Enter assignee name"
        />
      </div>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
        <textarea
          value={formData.description}
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full p-3 border border-gray-300 rounded-md"
          rows={4}
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-4 py-3 rounded-md hover:bg-blue-700 font-medium"
      >
        Create Ticket
      </button>
    </form>
  );
};