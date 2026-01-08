import { ReactNode } from "react";

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

export default function ContentContainer({ 
  children, 
  className = "" 
}: ContentContainerProps) {
  return (
    <div 
      className={`mx-auto max-w-7xl ${className}`}
      style={{ paddingLeft: "calc(1rem + 20px)", paddingRight: "calc(1rem + 20px)" }}
    >
      {children}
    </div>
  );
}

