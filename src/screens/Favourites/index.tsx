import React from 'react'
import { Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from "react-redux";
import JobItem from '../../components/JobItem';

const Favourites = () => {
    const favs = useSelector(state => state.favs)
    const dispatch = useDispatch()

    const handleRemove = (id: number) => {
        dispatch({ type: "REMOVE_FAV", payload: { id } })
    }

    const renderJobs = ({ item }: any) => (
        <JobItem job={item}>
            <TouchableOpacity style={styles.button} onPress={() => handleRemove(item.id)}>
                <Text style={styles.text}>Remove</Text>
            </TouchableOpacity>
        </JobItem>
    )

    return (
        <FlatList data={favs} renderItem={renderJobs} />
    )
}

export default Favourites

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#EF5350",
        marginVertical: 4,
        borderRadius: 5
    },
    text: {
        alignSelf: "center",
        color: "#fff",
        paddingVertical: 4,
        fontWeight: "bold",
        fontSize: 14
    }
})