import React from 'react'
import { View, Text, ActivityIndicator, Dimensions, StyleSheet, Alert, Platform, ScrollView } from 'react-native'
import useFetch from '../../hooks/use-fetch';
import { API_URL } from '@env'
import DetailHeader from '../../components/DetailHeader';
import { RenderHTML } from 'react-native-render-html';
import Button from '../../components/Button';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch } from "react-redux";

const JobDetail = ({ route }: any) => {
    const { id } = route.params;
    const { data, loading, error } = useFetch(API_URL + "/" + id)
    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch({ type: "ADD_FAV", payload: { data } })
        if (Platform.OS === "web") alert("The job added your favourites successfully")
        else Alert.alert("Added", "The job added your favourites successfully")
    }

    const handleApply = () => {
        if (Platform.OS === "web") alert("You applied for the job successfully")
        else Alert.alert("Applied", "You applied for the job successfully")
    }

    if(error){
        return <Text>Error</Text>
    }

    if (loading) {
        return <ActivityIndicator style={{ flex: 1, justifyContent: "center" }} />
    }
    return (
        <ScrollView >
            <DetailHeader
                level={data.levels[0].name}
                location={data.locations[0].name} />
            <View style={styles.container}>
                {
                       <RenderHTML contentWidth={Dimensions.get("window").width} source={{ html: data.contents }} /> 
                }
            </View>
            <View style={styles.buttons}>
                <Button text="Submit" onPress={handleApply}>
                    <MaterialCommunityIcons name="logout" size={24} color="white" />
                </Button>
                <Button text="Favorite Job" onPress={handleAdd}>
                    <AntDesign name="heart" size={24} color="white" />
                </Button>
            </View>
        </ScrollView>
    )
}

export default JobDetail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: Dimensions.get("window").width,
        backgroundColor: "white",
        paddingHorizontal: 16,
        paddingBottom: 4,
        borderWidth: 1,
        borderColor: "#aaa"
    },
    buttons: {
        flexDirection: 'row',
    }
})
