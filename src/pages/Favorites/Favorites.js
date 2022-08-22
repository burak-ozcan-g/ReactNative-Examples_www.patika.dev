import React from "react";
import { SafeAreaView, FlatList } from 'react-native';
import FavoritesCard from "../../components/FavoritesCard";

import { useSelector, useDispatch } from 'react-redux'
import { removeJob } from '../../context/FavoriteProvider/favoriteSlice';

function Favorites() {
    const dispatch = useDispatch();
    const favoriteJobs = useSelector((state) => state.favoriteJobs);

    const renderFavorite = ({ item }) => <FavoritesCard job={item}
        onRemove={() => removeFavorite(item.id)}
    />

    const removeFavorite = (id) => {
        dispatch(removeJob({
            id: id,
        }))
    }

    return (
        <SafeAreaView>
            <FlatList
                data={favoriteJobs}
                renderItem={renderFavorite}
            />
        </SafeAreaView>
    )
}
export default Favorites;