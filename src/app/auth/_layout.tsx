import { Stack } from "expo-router";
import React from "react";

const AuthRoutes = () => {
    return(
        <Stack>
            <Stack.Screen name="Login" options={{headerShown: false}}/>
            <Stack.Screen name="Register" options={{headerShown: false}}/>
        </Stack>
    )
}

export default AuthRoutes;