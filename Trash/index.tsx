import { View, StyleSheet } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import { ImageViewer, Button, IconButton, CircleButton, EmojiPicker, EmojiList, EmojiSticker } from "@/components";
import { useState } from "react";
import { type ImageSource } from 'expo-image';
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Placeholder = require('@/assets/images/background-image.png');


export default function Index() {
    const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined);
    const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
    const [pickedEmoji, setPickedEmoji] = useState<ImageSource | undefined>(undefined);

    const pickImageSync = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ['images'],
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setSelectedImage(result.assets[0].uri);
            setShowAppOptions(true);
        } else {
            alert('You did not select any image.');
        }
    };

    const onReset = () => {
        setShowAppOptions(false);
    }

    const onAddSticker = () => {
        setIsModalVisible(true);
    }

    const onModalClose = () => {
        setIsModalVisible(false);
    };

    const onSaveImageAsync = async () => {
    }

    return (
        <GestureHandlerRootView
            className="flex flex-col items-center justify-center h-full bg-[#25292e] text-white"
        >
            <View className="mb-32">
                <ImageViewer imgSource={Placeholder} selectedImage={selectedImage} />
                {pickedEmoji && <EmojiSticker imageSize={40} stickerSource={pickedEmoji} />}
            </View>

            {showAppOptions ? (
                <View style={styles.optionsContainer}>
                    <View style={styles.optionsRow}>
                        <IconButton icon="refresh" label="Reset" onPress={onReset} />
                        <CircleButton onPress={onAddSticker} />
                        <IconButton icon="save-alt" label="Save" onPress={onSaveImageAsync} />
                    </View>
                </View>
            ) : (
                <View className="flex flex-col items-center justify-center gap-y-4 mt-10">
                    <Button label="Choose a photo" theme="primary" onPress={pickImageSync} />
                    <Button label="Use this photo" />
                </View>
            )}

            <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
                <EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
            </EmojiPicker>
        </GestureHandlerRootView>

    );
}


const styles = StyleSheet.create({
    optionsContainer: {
        position: 'absolute',
        bottom: 70,
    },
    optionsRow: {
        alignItems: 'center',
        flexDirection: 'row',
    },
});