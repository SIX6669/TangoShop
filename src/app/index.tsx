import { View, Text, StyleSheet} from "react-native";
import React from "react";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

const Main = () => {
    const [fontsLoaded] = useFonts({
        Roboto: Roboto_400Regular
    });

    const styles = StyleSheet.create({
        view: {
            flex: 1,
            backgroundColor: "#fff000",
            alignItems: "center",
            justifyContent: "center",
        },
        text: {
            fontFamily: "Roboto",
            fontSize: 20,
        },
    });


    return (
        <View style={styles.view}>
            <Text style={styles.text}>React Native!!</Text>
        </View>
    )
}

export default Main;