// Button component - a simple button with a backgroundColor prop and onClick prop
export const Button =({ backgroundColor = "#000", onClick, children }) =>{
  return (
    // Use inline styles to set the background color, text color, padding, border, and border radius of the button
    <button
      style={{
        backgroundColor,
        color: "#fff",
        padding: "10px",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
      // Pass the onClick function to the onClick event handler of the button
      onClick={onClick}
    >
      {/* Render the button text */}
      {children}
    </button>
  );
}
