import React from "react";
import { SafeAreaView, FlatList } from 'react-native';
import styles from './Work.style'
import Config from 'react-native-config'
import useFetch from '../../hooks/useFetch'
import JobsCard from '../../components/JobsCard'
import Loading from '../../components/Loading'
import Error from '../../components/Error'


function Works({ navigation }) {
    const { error, loading, data }
        = useFetch(`https://www.themuse.com/api/public/jobs?page=3&descending=true`)

    const renderJobs = ({ item }) =>
        <JobsCard jobs={item} onSelect={() => handleJobSelect(item.id, item.name)} />

    const handleJobSelect = (id, name) => {
        navigation.navigate('DetailsPage', { id, name })
    }

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data.results}
                renderItem={renderJobs}
            />
        </SafeAreaView>
    )
}
export default Works;