import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native'

const Button = ({ text, children, onPress }: any) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            {children}
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#EF5350",
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        flex: 1,
        marginHorizontal: 5,
        padding: 5
    },
    text: {
        color: "#fff",
        paddingVertical: 4,
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 14
    }
})