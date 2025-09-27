interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

export default function Logo({ className = "", showText = true, size = "md" }: LogoProps) {
  const logoSizes = {
    sm: "w-6 h-6",
    md: "w-8 h-8", 
    lg: "w-12 h-12"
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl"
  };

  // Use direct path to logo in attached_assets
  const logoSrc = "/attached_assets/Screenshot 2025-09-27 at 2.11.42 AM_1758935511946.png";

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <span className={`font-bold ${textSizes[size]}`}>
        Hobotnika
      </span>
      <img 
        src={logoSrc} 
        alt="Hobotnika Logo" 
        className={`${logoSizes[size]} object-contain`}
        data-testid="img-hobotnika-logo"
      />
    </div>
  );
}