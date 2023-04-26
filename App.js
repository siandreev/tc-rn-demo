import { StatusBar } from "expo-status-bar";
import * as Linking from "expo-linking";
import { StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  const [wallet, setWallet] = useState();
  useEffect(async () => {
    const { default: TonConnect } = await import("@tonconnect/sdk");
    const connector = new TonConnect();
    const wallets = await connector.getWallets();
    console.log("wallets", walletsr);
    const tonkeeper = wallets.find((item) => item.name === "Tonkeeper");

    const deeplink = connector.connect({
      bridgeUrl: tonkeeper.bridgeUrl,
      universalLink: tonkeeper.universalLink,
    });
    Linking.openURL(deeplink);

    connector.onStatusChange((w) => {
      if (w) {
        setWallet(w);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      {wallet && <Text>{wallet.account.address}</Text>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
