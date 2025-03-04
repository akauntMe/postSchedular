import { Modal, Text, View, Pressable, StyleSheet } from 'react-native';
import { PropsWithChildren } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

type Props = PropsWithChildren<{
    isVisible: boolean;
    onClose: () => void;
}>

export default function EmojiPicker({ isVisible, children, onClose }: Props) {
    return (
        <Modal animationType="slide" transparent={true} visible={isVisible} className='transition-all duration-300 ease-in-out'>
            <View className='h-[25%] w-full bg-[#25292e] rounded-tr-[18px] rounded-tl-[18px] absolute bottom-0'>
                <View className='h-[16%] px-5 bg-[#464C55] rounded-tr-[10px] rounded-tl-[10px] flex-row flex justify-between items-center'>
                    <Text className='text-white text-base'>Choose a sticker</Text>
                    <Pressable onPress={onClose}>
                        <MaterialIcons name="close" color="#fff" size={22} />
                    </Pressable>
                </View>
                {children}
            </View>
        </Modal>
    )
}