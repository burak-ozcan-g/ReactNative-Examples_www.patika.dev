import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView } from "react-native";
import styles from './Room.style'
import FloatingButton from "../../components/FloatingButton";
import ContentInputModal from "../../components/modal/ContentInputModal";


import auth from '@react-native-firebase/auth'
import database from '@react-native-firebase/database'
import parseContentData from "../../utils/parseContentData";
import MessageCard from "../../components/cards/MessageCard";

const Room = ({ route }) => {
    const { item } = route.params;

    const [inputModalVisible, setInputModalVisible] = useState(false)
    const [messageList, setMessageList] = useState([]);

    useEffect(() => {
        database()
            .ref(`rooms/${item.id}/messages/`)
            .on('value', snapshot => {
                const contentData = snapshot.val();
                const parsedData = parseContentData(contentData || {});
                setMessageList(parsedData);
            })
    }, [item.id])


    function handleInputToggle() {
        setInputModalVisible(!inputModalVisible);
    }

    function handleSendContent(content) {
        handleInputToggle();
        sendMessage(content);
    }

    function sendMessage(content) {
        const userMail = auth().currentUser.email

        const contentData = {
            message: content,
            username: userMail.split('@')[0],
            date: new Date().toISOString(),
        };
        database()
            .ref(`rooms/${item.id}/messages/`)
            .push(contentData)
    }

    const renderMessages = ({ item }) => <MessageCard message={item} />

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={messageList}
                renderItem={renderMessages}
            />
            <FloatingButton icon='add' onPress={handleInputToggle} />
            <ContentInputModal
                buttonText={'Gönder'}
                placeholder={'Mesajınızı yazın...'}
                visible={inputModalVisible}
                onSend={handleSendContent}
                onClose={handleInputToggle} />
        </SafeAreaView>
    )
}
export default Room;