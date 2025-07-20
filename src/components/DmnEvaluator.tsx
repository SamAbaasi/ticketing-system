import { CheckCircle, AlertCircle } from "lucide-react";

export const DmnEvaluator: React.FC = () => {
    return (
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Equipment Logic (DMN)</h2>
        <div className="bg-gray-50 p-4 rounded-md">
          <p className="text-sm text-gray-600">DMN Rules Evaluation:</p>
          <ul className="mt-2 space-y-1 text-sm">
            <li className="flex items-center">
              <CheckCircle size={16} className="text-green-500 mr-2" />
              Equipment maintenance window: Valid
            </li>
            <li className="flex items-center">
              <CheckCircle size={16} className="text-green-500 mr-2" />
              Resource availability: Confirmed
            </li>
            <li className="flex items-center">
              <AlertCircle size={16} className="text-yellow-500 mr-2" />
              Budget approval: Pending review
            </li>
          </ul>
        </div>
      </div>
    );
  };