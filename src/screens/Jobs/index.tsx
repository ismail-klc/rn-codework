import React from 'react'
import { View, Text, ActivityIndicator, FlatList } from 'react-native'
import useFetch from '../../hooks/use-fetch'
import { API_URL } from '@env'
import JobItem from '../../components/JobItem'

const Jobs = ({ navigation }: any) => {
    const { data, loading, error } = useFetch(API_URL + "?page=1")

    const handleSelect = (id: number) => {
        navigation.navigate("JobDetail", { id })
    }

    const renderJobs = ({ item }: any) => (
        <JobItem job={item} onSelect={() => handleSelect(item.id)}/>
    )

    if(error){
        return <Text>Error</Text>
    }
    if (loading) {
        return <ActivityIndicator style={{ flex: 1, justifyContent: "center" }} />
    }
    return (
        <FlatList data={data.results} renderItem={renderJobs} />
    )
}

export default Jobs
