import { toast } from "sonner";
import { AlertCircle, CheckCircle2, Info } from "lucide-react";

export const showNotify = {
  success: (msg: string) =>
    toast.success(msg, {
      icon: <CheckCircle2 className="h-4 w-4 text-success" />,
    }),

  error: (msg: string, code?: string) =>
    toast.error("Action Failed", {
      description: `${msg} ${code ? `(Error: ${code})` : ""}`,
      icon: <AlertCircle className="h-4 w-4" />,
      duration: 6000,
      className: "bg-error/10 text-error",
    }),

  security: (msg: string) =>
    toast("Security Alert", {
      description: msg,
      icon: <Info className="h-4 w-4 text-primary" />,
    }),
};
