export interface Ticket {
    id: string;
    title: string;
    status: string;
    priority: string;
    assignee: string;
    created: string;
    category: string;
    description: string;
    workflowId: string;
  }
  
  export interface TicketLog {
    id: number;
    action: string;
    user: string;
    timestamp: string;
    details: string;
  }
  
  export interface Attachment {
    id: number;
    name: string;
    size: string;
    uploadedBy: string;
    uploadedAt: string;
  }
  
  export interface FormData {
    title: string;
    category: string;
    priority: string;
    description: string;
    assignee: string;
  }