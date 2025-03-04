import { View, Text, StyleSheet } from "react-native";

export default function AboutScreen() {
    return (
        <View className="bg-red-700">
            <Text style={style.text}>Edit app/about.tsx to edit this screen.</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#25292e",
        justifyContent: "center",
        alignItems: "center",
    },
    text: {
        color: "#fff",
    }
});