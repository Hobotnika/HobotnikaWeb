interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  // TODO: Replace with actual uploaded octopus logo
  // For now, using placeholder "H" until logo is uploaded
  const logoSizes = {
    sm: "w-6 h-6 text-sm",
    md: "w-8 h-8 text-lg", 
    lg: "w-12 h-12 text-xl"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo placeholder - replace with actual octopus logo when uploaded */}
      <div className={`${logoSizes[size]} bg-primary-foreground rounded-full flex items-center justify-center`}>
        {/* TODO: Replace this div with <img src="/path/to/octopus-logo.png" alt="Hobotnika Logo" /> */}
        <span className="text-primary font-bold">{size === "sm" ? "H" : "H"}</span>
      </div>
      
      {showText && (
        <span className={`font-bold ${textSizes[size]}`}>
          Hobotnika
        </span>
      )}
    </div>
  );
}