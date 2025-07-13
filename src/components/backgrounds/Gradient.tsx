interface BackgroundProps {
  darkMode: boolean;
}

const Geometric = ({ darkMode }: BackgroundProps) => {
  return (
    <div
      className="absolute inset-0 z-0"
      style={
        darkMode
          ? {
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(120, 180, 255, 0.25), transparent 45%), #000000",
            }
          : {
              background: "#ffffff",
              backgroundImage: `
        radial-gradient(
          circle at top center,
          rgba(70, 130, 180, 0.5),
          transparent 25%
        )
      `,
              filter: "blur(70px)",
              backgroundRepeat: "no-repeat",
            }
      }
    />
  );
};

export default Geometric;
