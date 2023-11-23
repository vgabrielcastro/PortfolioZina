import { styled, YStack } from "tamagui";
const MyComponent = styled(YStack, {
  name: "MyComponent",
  backgroundColor: "red",
  variants: {
    blue: {
      true: {
        backgroundColor: "blue"
      }
    }
  }
});
export {
  MyComponent
};
//# sourceMappingURL=MyComponent.js.map
