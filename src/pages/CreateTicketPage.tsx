import { FormRenderer } from "@/components/FormRenderer";
import { mockTickets } from "@/data/mockData";
import { ArrowLeft } from "lucide-react";

const CreateTicketPage: React.FC<{ onBack: () => void; onSuccess: (ticketId: string) => void }> = ({ onBack, onSuccess }) => {
    const handleSubmit = (formData: any) => {
      // Mock DMN routing logic
      console.log('DMN Routing evaluation for:', formData);
      
      // Simulate ticket creation
      const newTicketId = `TKT-${String(mockTickets.length + 1).padStart(3, '0')}`;
      
      // Mock success
      setTimeout(() => {
        onSuccess(newTicketId);
      }, 1000);
    };
  
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Tickets
          </button>
        </div>
  
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Create New Ticket</h1>
          <FormRenderer onSubmit={handleSubmit} />
        </div>
      </div>
    );
  };
  export default CreateTicketPage;
