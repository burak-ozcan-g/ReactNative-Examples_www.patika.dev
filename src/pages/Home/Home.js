import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import styles from './Home.style'
import FloatingButton from "../../components/FloatingButton";
import ContentInputModal from "../../components/modal/ContentInputModal";

import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import parseContentData from "../../utils/parseContentData";
import RoomCard from "../../components/cards/RoomCard";

const Home = ({ navigation }) => {
    const [inputModalVisible, setInputModalVisible] = useState(false);
    const [contentList, setContentList] = useState([]);

    useEffect(() => {
        database()
            .ref('rooms/')
            .on('value', snapshot => {
                const contentData = snapshot.val();
                const parsedData = parseContentData(contentData || {});
                setContentList(parsedData);
            })
    }, [])

    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible);
    }

    function handleSendContent(content) {
        handleInputToggle();
        sendContent(content);
    }

    function sendContent(content) {
        const userMail = auth().currentUser.email

        const contentObject = {
            name: content,
            username: userMail.split('@')[0],
            date: new Date().toISOString(),
        }

        database().ref('rooms/').push(contentObject)
    }

    const handleRoomDetail = item => {
        navigation.navigate('RoomPage', { item })
    }

    const renderContent = ({ item }) => <RoomCard room={item} onPress={() => handleRoomDetail(item)} />


    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                numColumns={2}
                data={contentList}
                renderItem={renderContent}
            />
            <FloatingButton icon='add' onPress={handleInputToggle} />
            <ContentInputModal
                buttonText={'Oluştur'}
                placeholder={'Oda adı...'}
                visible={inputModalVisible}
                onSend={handleSendContent}
                onClose={handleInputToggle} />
        </SafeAreaView>
    )
}
export default Home;