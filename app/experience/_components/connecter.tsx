import { Circle } from "lucide-react";

export default function ConnectorDot() {
  return (
    <div className="flex items-center justify-center w-20 shrink-0 z-10">
      <Circle
        className="text-border fill-background"
        size={14}
        strokeWidth={2}
      />
    </div>
  );
}
