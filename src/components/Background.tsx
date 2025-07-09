interface BackgroundProps {
  darkMode: boolean;
}

const Background = ({ darkMode }: BackgroundProps) => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={
        darkMode
          ? {
              background: "#000000",
              backgroundImage: `
                radial-gradient(circle at 1px 1px, rgba(139, 92, 246, 0.2) 1px, transparent 0),
                radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.18) 1px, transparent 0),
                radial-gradient(circle at 1px 1px, rgba(236, 72, 153, 0.15) 1px, transparent 0)
              `,
              backgroundSize: "20px 20px, 30px 30px, 25px 25px",
              backgroundPosition: "0 0, 10px 10px, 15px 5px",
            }
          : {
              background: "#ffffff",
              backgroundImage:
                "radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.35) 1px, transparent 0)",
              backgroundSize: "20px 20px",
            }
      }
    />
  );
};

export default Background;
