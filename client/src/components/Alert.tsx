import { X } from "lucide-react";
import type { AlertType } from "../App";

interface AlertProps {
  alerts: AlertType[];
  removeAlert: (id: string) => void;
}

export default function Alert({ alerts, removeAlert }: AlertProps) {
  if (alerts.length === 0) return null;

  return (
    <div className="fixed top-20 right-6 z-50 space-y-4">
      {alerts.map((alert) => (
        <div
          key={alert.id}
          className={`${
            alert.type === 'success' ? 'bg-green-500' : 'bg-red-500'
          } text-white px-6 py-4 rounded-lg shadow-lg animate-slide-up max-w-sm`}
        >
          <div className="flex items-center justify-between">
            <span className="pr-4">{alert.message}</span>
            <button
              onClick={() => removeAlert(alert.id)}
              className="text-white hover:text-gray-200 flex-shrink-0"
            >
              <X size={18} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
