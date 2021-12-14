import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        borderWidth: 1,
        borderRadius: 5,
        marginHorizontal: 10,
        marginTop: 10,
        padding: 5
    },
    title: {
        fontWeight: "bold"
    },
    location: {
        backgroundColor: "#EF5350",
        color: "white",
        borderRadius: 5,
        paddingHorizontal: 3,
        marginVertical: 2,
        alignSelf: 'flex-start',
        fontWeight: "600",
        fontSize: 13
    },
    level: {
        color: "#EF5350",
        alignSelf: "flex-end",
        fontWeight: "bold",
        fontSize: 12
    }
})