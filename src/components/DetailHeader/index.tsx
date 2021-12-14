import React from 'react'
import { View, Text } from 'react-native'
import styles from './style'

const DetailHeader = ({ location, level }: any) => {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Implementation Consultant</Text>
            <View style={styles.text_container}>
                <Text style={styles.text}>Locations: </Text>
                <Text style={styles.data}>{location}</Text>
            </View>
            <View style={styles.text_container}>
                <Text style={styles.text}>Job Level: </Text>
                <Text style={styles.data}>{level}</Text>
            </View>
            <Text style={styles.title}>Job Detail</Text>
        </View>
    )
}

export default DetailHeader
