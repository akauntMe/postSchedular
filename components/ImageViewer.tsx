import { Image, type ImageSource } from 'expo-image';

type Props = {
    imgSource: ImageSource;
    selectedImage?: string;
};

export default function ImageViewer({ imgSource, selectedImage }: Props) {
    const imageSource = selectedImage ? { uri: selectedImage } : imgSource;
    return <Image source={imageSource} className='w-[320px] h-[440px] rounded-md shadow- scale-95 hover:scale-100 shadow-black/40 hover:shadow-md transition-all' />;
}


