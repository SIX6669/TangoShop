import { useState } from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { BlurView } from 'expo-blur';
import Button from "../components/Button";
import Input from "../components/Input";
import React from "react";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

const img = require("../assets/images/imgBg.png")

const Main = () => {
    const [fontsLoaded] = useFonts({
        Roboto: Roboto_400Regular
    });

    const styles = StyleSheet.create({
        view: {
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
        },
        text: {
            fontFamily: "Roboto",
            fontSize: 20,
        },
        input: {
            backgroundColor: "rgba(255,255,255,0.25)",
            padding: 10,
            borderRadius: 10
        }
    });

    const [username, setUsername] = useState("");

    return (
        <ImageBackground
            source={img}

            className="w-full h-screen"
        >
            <BlurView
                intensity={20}
                tint="light"
                className="flex-1"
            >
                <View className="flex-1 justify-center items-center p-4">
                    <Text className="text-white text-4xl font-bold">React Native!!</Text>
                    <Button
                        title="Click me"
                        classButton="bg-blue-700 p-2 rounded-md w-full"
                        classTitle="text-white text-center"
                        onPress={() => console.log(username)}
                    />

                    <Input
                        placeholder="Enter your name"
                        onChangeText={setUsername}
                        value={username}
                        className="mt-4 w-full"
                        style={styles.input}
                    />
                </View>
            </BlurView>
        </ImageBackground>
    )
}

export default Main;