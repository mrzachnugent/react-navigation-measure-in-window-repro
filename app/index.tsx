import * as React from "react";
import { Pressable, Text, View } from "react-native";
// import { useHeaderHeight } from "@react-navigation/elements";

export default function Screen() {
  const triggerRef = React.useRef<React.ElementRef<typeof Pressable>>(null);
  const [show, setShow] = React.useState(false);
  const [targetRect, setTargetRect] = React.useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  // const headerHeight = useHeaderHeight();

  React.useLayoutEffect(() => {
    triggerRef.current?.measureInWindow((x, y, width, height) => {
      setTargetRect({ x, y, width, height });
    });
  }, [setTargetRect]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Pressable
        ref={triggerRef}
        onPress={() => setShow((prev) => !prev)}
        style={{ backgroundColor: "dodgerblue", padding: 10, borderRadius: 5 }}
      >
        <Text style={{ color: "white", fontWeight: "800" }}>
          Press here to {show ? "close" : "open"}
        </Text>
      </Pressable>
      {show && (
        <View
          style={{
            height: 100,
            width: 100,
            backgroundColor: "red",
            position: "absolute",
            // top: targetRect.y + targetRect.height - headerHeight,
            top: targetRect.y + targetRect.height,
            left: targetRect.x,
          }}
        />
      )}
    </View>
  );
}
