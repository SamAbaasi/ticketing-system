import { ConflictDialog } from "@/components/modals/ConflictDialog";
import { PauseTicketDialog } from "@/components/modals/PauseTicketDialog";
import { RelatedTickets } from "@/components/modals/RelatedTickets";
import { TicketCard } from "@/components/TicketCard";
import { mockTickets } from "@/data/mockData";
import { Plus, Search } from "lucide-react";
import { useState } from "react";

const TicketListPage: React.FC<{ 
    onViewTicket: (id: string) => void; 
    onCreateTicket: () => void; 
    onPreviewWorkflow: (workflowId: string) => void;
  }> = ({ onViewTicket, onCreateTicket, onPreviewWorkflow }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filterStatus, setFilterStatus] = useState('All');
    const [pauseDialogOpen, setPauseDialogOpen] = useState(false);
    const [selectedTicketId, setSelectedTicketId] = useState('');
    const [relatedDialogOpen, setRelatedDialogOpen] = useState(false);
    const [conflictDialogOpen, setConflictDialogOpen] = useState(false);
  
    const filteredTickets = mockTickets.filter(ticket => {
      const matchesSearch = ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           ticket.id.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === 'All' || ticket.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Tickets</h1>
          <button
            onClick={onCreateTicket}
            className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            <Plus size={20} className="mr-2" />
            Create Ticket
          </button>
        </div>
  
        <div className="flex space-x-4">
          <div className="flex-1 relative">
            <Search size={20} className="absolute left-3 top-3 text-gray-400" />
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="All">All Status</option>
            <option value="Pending">Pending</option>
            <option value="In Progress">In Progress</option>
            <option value="Approved">Approved</option>
          </select>
        </div>
  
        <div className="grid gap-6">
          {filteredTickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              ticket={ticket}
              onView={onViewTicket}
              onPreview={onPreviewWorkflow}
              onPause={(ticketId) => {
                setSelectedTicketId(ticketId);
                setPauseDialogOpen(true);
              }}
              onRelated={() => setRelatedDialogOpen(true)}
            />
          ))}
        </div>
  
        <PauseTicketDialog
          isOpen={pauseDialogOpen}
          onClose={() => setPauseDialogOpen(false)}
          ticketId={selectedTicketId}
        />
  
        <RelatedTickets
          isOpen={relatedDialogOpen}
          onClose={() => setRelatedDialogOpen(false)}
          tickets={mockTickets.slice(0, 2)}
        />
  
        <ConflictDialog
          isOpen={conflictDialogOpen}
          onClose={() => setConflictDialogOpen(false)}
          message="Equipment is currently under maintenance. Cannot proceed with this workflow."
        />
      </div>
    );
  };
  export default TicketListPage;
  