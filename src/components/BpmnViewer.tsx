import React from 'react';
import { GitBranch } from 'lucide-react';

interface BpmnViewerProps {
  workflowId: string;
}

export const BpmnViewer: React.FC<BpmnViewerProps> = ({ workflowId }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">Workflow Diagram</h2>
      <div className="bg-gray-50 h-64 flex items-center justify-center rounded-md">
        <div className="text-center">
          <GitBranch size={48} className="text-gray-400 mx-auto mb-2" />
          <p className="text-gray-500">BPMN Viewer for workflow: {workflowId}</p>
          <p className="text-sm text-gray-400">Integration with bpmn.io would render the actual workflow diagram here</p>
        </div>
      </div>
    </div>
  );
};