import SocialLoginButton from "@/components/SocialLoginButton";
import { StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const AuthScreen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top + 40, paddingBottom: insets.bottom },
      ]}
    >
      <View style={styles.headingContainer}>
        <Text style={styles.label}>Login on Dev Inteprid</Text>
        <Text style={styles.description}>
          Start your journey with thousands of developers around the world.
        </Text>
      </View>

      <View style={styles.socialButtonsContainer}>
        <SocialLoginButton strategy="facebook" />
        <SocialLoginButton strategy="google" />
        <SocialLoginButton strategy="apple" />
      </View>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 20,
    gap: 20,
  },
  headingContainer: {
    width: "100%",
    gap: 5,
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    color: "gray",
  },
  socialButtonsContainer: {
    width: "100%",
    marginTop: 20,
    gap: 10,
  },
});
