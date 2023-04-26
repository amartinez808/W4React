import { Box } from "./Box";
import { Text } from "./Text";
import { Button } from "./Button";

export const MyAwesomeComponent = () => {
  // Define a function to handle the onClick event of the button
  function handleClick() {
    alert("Hello, world!");
  }

  return (
    // Use the Box component to create a styled box with child components
    <Box size="lg" backgroundColor="#fff">
      {/* Use the Text component to render some text */}

      {/* Use the Button component to create a clickable button */}
      <Button backgroundColor="#f00" onClick={handleClick}>
        <Text size="lg" color="#000">
          Click me!
        </Text>
      </Button>
    </Box>
  );
};
