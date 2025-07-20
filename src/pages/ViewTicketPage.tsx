import { Attachments } from "@/components/Attachments";
import { BpmnViewer } from "@/components/BpmnViewer";
import { DmnEvaluator } from "@/components/DmnEvaluator";
import { TicketBasicInfo } from "@/components/TicketBasicInfo";
import { TicketLogs } from "@/components/TicketLogs";
import { mockTickets, mockLogs, mockAttachments } from "@/data/mockData";
import { ArrowLeft } from "lucide-react";

const ViewTicketPage: React.FC<{ ticketId: string; onBack: () => void }> = ({ ticketId, onBack }) => {
    const ticket = mockTickets.find(t => t.id === ticketId) || mockTickets[0];
  
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-gray-800"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Tickets
            </button>
            <h1 className="text-3xl font-bold text-gray-900">{ticket.title}</h1>
          </div>
        </div>
  
        <div className="grid gap-6">
          <TicketBasicInfo ticket={ticket} />
          
          <div className="grid md:grid-cols-2 gap-6">
            <TicketLogs logs={mockLogs} />
            <Attachments attachments={mockAttachments} />
          </div>
  
          <DmnEvaluator />
          <BpmnViewer workflowId={ticket.workflowId} />
        </div>
      </div>
    );
  };
  export default ViewTicketPage;
