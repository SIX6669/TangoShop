import { Stack } from "expo-router";
import React from "react";
import "../../global.css"
const RootNavigation = () => {
    return(
        <Stack>
            <Stack.Screen name="index" options={{headerShown: false}}/>
            <Stack.Screen name="auth" options={{headerShown: false}}/>
        </Stack>
    )
}

export default RootNavigation;