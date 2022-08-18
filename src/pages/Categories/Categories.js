import React from "react";
import { SafeAreaView, FlatList } from 'react-native'
import styles from './Categories.style'
import Config from 'react-native-config'
import CategoriesCard from "../../components/CategoriesCard";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/Loading";
import Error from "../../components/Error";


const Categories = ({ navigation }) => {
    const { error, loading, data } =
        useFetch('https://www.themealdb.com/api/json/v1/1/categories.php')
        
    const renderCategories = ({ item }) =>
        <CategoriesCard categories={item}
            onSelect={() => handleCategorySelect(item.strCategory)}
        />

    const handleCategorySelect = strCategory => {
        navigation.navigate('MealsPage', { strCategory })
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
                data={data.categories}
                renderItem={renderCategories}
            />
        </SafeAreaView>
    )
}
export default Categories;