// Text component - a styled text component with a size prop and color prop
export const Text =({ size = "md", color = "#000", children })=> {
  // Define the available font sizes for the text
  const fontSizes = {
    sm: "1rem",
    md: "1.5rem",
    lg: "2rem",
  };

  return (
    // Use inline styles to set the font size and color of the text
    <p style={{ fontSize: fontSizes[size] || fontSizes.md, color }}>
      {/* Render the text content */}
      {children}
    </p>
  );
}
