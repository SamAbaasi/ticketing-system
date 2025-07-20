import { useState } from "react";
import CreateTicketPage from "./pages/CreateTicketPage";
import TicketListPage from "./pages/TicketListPage";
import ViewTicketPage from "./pages/ViewTicketPage";
import WorkflowPreviewPage from "./pages/WorkflowPreviewPage";

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState<'list' | 'create' | 'view' | 'preview'>('list');
    const [selectedTicketId, setSelectedTicketId] = useState<string>('');
    const [selectedWorkflowId, setSelectedWorkflowId] = useState<string>('');
  
    const navigateToList = () => setCurrentPage('list');
    const navigateToCreate = () => setCurrentPage('create');
    const navigateToView = (ticketId: string) => {
      setSelectedTicketId(ticketId);
      setCurrentPage('view');
    };
    const navigateToPreview = (workflowId: string) => {
      setSelectedWorkflowId(workflowId);
      setCurrentPage('preview');
    };
    const handleCreateSuccess = (ticketId: string) => {
      navigateToView(ticketId);
    };
  
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          {currentPage === 'list' && (
            <TicketListPage
              onViewTicket={navigateToView}
              onCreateTicket={navigateToCreate}
              onPreviewWorkflow={navigateToPreview}
            />
          )}
          
          {currentPage === 'create' && (
            <CreateTicketPage
              onBack={navigateToList}
              onSuccess={handleCreateSuccess}
            />
          )}
          
          {currentPage === 'view' && (
            <ViewTicketPage
              ticketId={selectedTicketId}
              onBack={navigateToList}
            />
          )}
          
          {currentPage === 'preview' && (
            <WorkflowPreviewPage
              workflowId={selectedWorkflowId}
              onBack={navigateToList}
            />
          )}
        </div>
      </div>
    );
  };
  
  export default App;