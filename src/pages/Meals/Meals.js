import React from "react";
import { SafeAreaView, FlatList } from 'react-native'
import styles from './Meals.style'
import Config from 'react-native-config'
import MealsCard from "../../components/MealsCard";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Meals = ({ route, navigation }) => {
    const { strCategory } = route.params;
    const { error, loading, data } =
        useFetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`)

    

    const renderMeals = ({ item }) =>
        <MealsCard meals={item}
            onSelect={() => handleMealSelect(item.idMeal)}
        />

    const handleMealSelect = idMeal => {
        navigation.navigate('DetailsPage', { idMeal })
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
                data={data.meals}
                renderItem={renderMeals}
            />
        </SafeAreaView>
    )
}
export default Meals;
