import { ArrowLeft, GitBranch } from "lucide-react";

const WorkflowPreviewPage: React.FC<{ workflowId: string; onBack: () => void }> = ({ workflowId, onBack }) => {
    return (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <button
            onClick={onBack}
            className="flex items-center text-gray-600 hover:text-gray-800"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back
          </button>
          <h1 className="text-3xl font-bold text-gray-900">Workflow Preview</h1>
        </div>
  
        <div className="bg-white border border-gray-200 rounded-lg p-8">
          <div className="bg-gray-50 h-96 flex items-center justify-center rounded-md">
            <div className="text-center">
              <GitBranch size={64} className="text-gray-400 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-gray-700 mb-2">BPMN/CMMN Viewer</h2>
              <p className="text-gray-500">Visual-only workflow diagram for: {workflowId}</p>
              <p className="text-sm text-gray-400 mt-2">
                This would integrate with bpmn.io to display the actual workflow diagram
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default WorkflowPreviewPage;
