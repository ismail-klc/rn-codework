import React from 'react'
import { View, Text, TouchableWithoutFeedback } from 'react-native'
import styles from './style'

const JobItem = ({ job, onSelect, children }: any) => {
    return (
        <TouchableWithoutFeedback onPress={onSelect}>
            <View style={styles.container}>
                <Text style={styles.title}>{job.name}</Text>
                <Text>{job.company.name}</Text>
                <Text style={styles.location}>{job.locations.length > 0 ? job.locations[0].name : "No location"}</Text>
                <Text style={styles.level}>{job.levels.length > 0 ?job.levels[0].name : "No level"}</Text>
                {children}
            </View>
        </TouchableWithoutFeedback>
    )
}

export default JobItem
