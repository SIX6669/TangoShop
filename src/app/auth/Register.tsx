import { View, Text, StyleSheet} from "react-native";
import React from "react";

const Register = () => {
    
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
            <Text style={styles.text}>Register</Text>
        </View>
    )
}

export default Register;