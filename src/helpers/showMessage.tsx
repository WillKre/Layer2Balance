import toast from "react-hot-toast";

export enum MessageType {
  Success = "success",
  Error = "error",
}

export function showMessage(message: string, type: MessageType) {
  toast(message, {
    icon: type === MessageType.Success ? "✅" : "🚨",
    style: {
      color: "#fff",
      background: "#333",
      borderRadius: "10px",
    },
    position: "bottom-left",
  });
}
