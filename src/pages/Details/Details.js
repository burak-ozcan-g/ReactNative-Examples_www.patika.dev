import React from "react";
import { SafeAreaView, Linking, FlatList } from 'react-native'
import styles from './Details.stlye'
import Config from 'react-native-config'
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";
import DetailCard from '../../components/DetailsCard'

const Details = ({ route }) => {
    const { idMeal } = route.params;
    const { error, loading, data } =
        useFetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)

    const renderDetail = ({ item }) => <DetailCard details={item}
        onSelect={() => Linking.openURL(item.strYoutube)}
    />

    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <SafeAreaView >
            <FlatList
                data={data.meals}
                renderItem={renderDetail}
            />
        </SafeAreaView>
    )
}

export default Details;