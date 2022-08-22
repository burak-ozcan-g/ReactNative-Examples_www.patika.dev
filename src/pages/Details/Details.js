import React from "react";
import { ScrollView, View, Text, Pressable, useWindowDimensions, Linking } from 'react-native';
import styles from './Details.style'
import Config from 'react-native-config'
import useFetch from "../../hooks/useFetch";
import Loading from '../../components/Loading'
import Error from '../../components/Error'
import RenderHtml from 'react-native-render-html';

import { useDispatch } from 'react-redux'
import { addJob } from '../../context/FavoriteProvider/favoriteSlice';


function Details({ route }) {
    const { id } = route.params;
    const { error, loading, data } = useFetch(`https://www.themuse.com/api/public/jobs/${id}`)
    const { width } = useWindowDimensions();
    const dispatch = useDispatch();

    function onPressSubmit() {
        Linking.openURL(data.refs.landing_page)
    }

    const onPressFavorite = favoriteJob => {
        dispatch(addJob({
            job: favoriteJob,
        }))
    }


    if (loading) {
        return <Loading />
    }
    if (error) {
        return <Error />
    }

    return (
        <View style={styles.container}>
            <View style={styles.title_view}>
                <Text style={styles.name}> {data.name} </Text>
                <View style={styles.desc_view}>
                    <Text style={styles.desc_title}> Locations: </Text>
                    <Text style={styles.desc}> {data.locations[0].name} </Text>
                </View>
                <View style={styles.desc_view}>
                    <Text style={styles.desc_title}> Job Level: </Text>
                    <Text style={styles.desc}> {data.levels[0].name} </Text>
                </View>
                <Text style={styles.detail_title}> Job Detail</Text>
            </View>
            <View style={styles.html_view}>
                <ScrollView>
                    <RenderHtml contentWidth={width} baseStyle={styles.html} source={{ html: data.contents }} />
                </ScrollView>
            </View>
            <View style={styles.buttons_view}>
                <Pressable style={styles.button} onPress={onPressSubmit}>
                    <Text style={styles.button_text}> Submit </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => onPressFavorite(data)}>
                    <Text style={styles.button_text}> Favorite Job</Text>
                </Pressable>
            </View>
        </View>
    )
}
export default Details;