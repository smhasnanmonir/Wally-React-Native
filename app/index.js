import { Image, Pressable, StyleSheet, Text, View } from "react-native";

import { StatusBar } from "expo-status-bar";
import { hp, wp } from "../helpers/common";

import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

export default function Page() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <StatusBar style="light"></StatusBar>
      <Image
        source={require("../assets/images/welcome.png")}
        style={styles.bgImage}
        resizeMode="cover"
      />

      <View>
        <LinearGradient
          colors={[
            "rgba(255,255,255,0)",
            "rgba(255,255,255,0.5)",
            "white",
            "white",
          ]}
          style={styles.gradient}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 0.8 }}
        />
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.title}>Wally</Text>
        <Text style={styles.punchLine}>Wally Bring You Wallpapers.</Text>
        <View>
          <Pressable
            onPress={() => router.push("home")}
            style={styles.startButton}
          >
            <Text style={styles.buttonText}>Explore</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    width: wp(100),
    height: hp(100),
  },
  gradient: {
    width: wp(100),
    height: hp(85),
    bottom: -80,
    position: "absolute",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 16,
  },
  title: {
    height: hp(8),
    fontSize: hp(7),
    fontWeight: "bold",
  },
  startButton: {
    backgroundColor: "blue",
    color: "pink",
    width: wp(65),
    height: hp(7),
    borderRadius: 10,
    marginBottom: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  punchLine: {
    fontSize: hp(3),
    fontWeight: "bold",
    color: "black",
  },
  buttonText: {
    color: "white",
    fontSize: hp(2),
    fontWeight: "bold",
    latterSpacing: 1,
  },
});
