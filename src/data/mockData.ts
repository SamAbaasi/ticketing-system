import { Ticket, TicketLog, Attachment } from '../types';

export const mockTickets: Ticket[] = [
  {
    id: 'TKT-001',
    title: 'Equipment Maintenance Request',
    status: 'In Progress',
    priority: 'High',
    assignee: 'John Doe',
    created: '2025-01-15',
    category: 'Maintenance',
    description: 'Annual maintenance required for production equipment',
    workflowId: 'maintenance-workflow'
  },
  {
    id: 'TKT-002',
    title: 'Software License Renewal',
    status: 'Pending',
    priority: 'Medium',
    assignee: 'Jane Smith',
    created: '2025-01-14',
    category: 'IT',
    description: 'Renew software licenses before expiration',
    workflowId: 'approval-workflow'
  },
  {
    id: 'TKT-003',
    title: 'Budget Approval Request',
    status: 'Approved',
    priority: 'Low',
    assignee: 'Mike Johnson',
    created: '2025-01-13',
    category: 'Finance',
    description: 'Q2 budget approval for marketing department',
    workflowId: 'budget-workflow'
  }
];

export const mockLogs: TicketLog[] = [
  { id: 1, action: 'Ticket Created', user: 'System', timestamp: '2025-01-15 09:00', details: 'Ticket automatically created from equipment sensor alert' },
  { id: 2, action: 'Assigned', user: 'Admin', timestamp: '2025-01-15 09:15', details: 'Assigned to John Doe' },
  { id: 3, action: 'In Progress', user: 'John Doe', timestamp: '2025-01-15 10:30', details: 'Started maintenance procedure' },
];

export const mockAttachments: Attachment[] = [
  { id: 1, name: 'equipment-specs.pdf', size: '2.4 MB', uploadedBy: 'John Doe', uploadedAt: '2025-01-15 10:45' },
  { id: 2, name: 'maintenance-checklist.xlsx', size: '156 KB', uploadedBy: 'Jane Smith', uploadedAt: '2025-01-15 11:20' },
];