
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { WebView } from "react-native-webview";
// Define the type inline or use `any` if unsure about the exact type
type WebViewPermissionRequestEvent = {
  grant: (resources: string[]) => void;
  resources: string[];
};
import Constants from "expo-constants";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <WebView
        source={{ uri: "https://liked-glider-globally.ngrok-free.app" }}
        style={{ flex: 1 }}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        mediaPlaybackRequiresUserAction={false}
        allowsInlineMediaPlayback={true}
        androidHardwareAccelerationDisabled={false}
        onPermissionRequest={(event: WebViewPermissionRequestEvent) => {
          event.grant(event.resources);
        }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
});
