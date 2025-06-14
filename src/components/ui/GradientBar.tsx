interface GradientBarProps {
  height?: string;
  className?: string;
}

const GradientBar = ({ height = "h-3", className = "" }: GradientBarProps) => {
  return (
    <div
      className={`w-full bg-gradient-to-r from-blue-800 via-emerald-600 to-indigo-950 ${height} ${className}`}
    />
  );
};

export default GradientBar;
