// Box component - a styled box with a size prop and default background color
export const Box = ({ size = "md", backgroundColor = "#000000", children }) => {
  // Define the available sizes for the box
  const sizes = {
    sm: "100px",
    md: "200px",
    lg: "300px",
  };

  return (
    // Use inline styles to set the background color, width, and height of the box
    <div
      className="Box"
      style={{
        backgroundColor: `${backgroundColor}`,
        width: sizes[size] || sizes.md,
        height: sizes[size] || sizes.md,
      }}
    >
      {/* Render any child components */}
      {children}
    </div>
  );
};