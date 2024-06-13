

import { Image, NativeScrollEvent, NativeSyntheticEvent, Text, View, useWindowDimensions } from 'react-native';
import { globalStyles } from '../../../config/theme/themes';
import { FlatList } from 'react-native-gesture-handler';
import { Slide, slideItems } from '../../assets/resources/data';
import Button from '../../components/ui/Button';
import { useContext, useRef, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../../context/ThemeContext';


const SlidesScreen = () => {
    const { colors } = useContext(ThemeContext);

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
    const flatListRef = useRef<FlatList>(null);
    const navigation = useNavigation();
    const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
        const { contentOffset, layoutMeasurement } = event.nativeEvent;
        const currentIndex = Math.floor(contentOffset.x / layoutMeasurement.width);

        setCurrentSlideIndex(currentIndex > 0 ? currentIndex : 0);
    };
    const scrollToSlide = (index: number) => {
        if (!flatListRef.current) return;

        flatListRef.current.scrollToIndex({
            index: index,
            animated: true,
        });

    };

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.background,
            }}>
            <FlatList
                ref={flatListRef}
                data={slideItems}
                keyExtractor={(item) => item.title}
                horizontal
                pagingEnabled
                scrollEnabled={false}
                renderItem={({ item }) => <SlideItem item={item} />}
                onScroll={onScroll}
            />

            {currentSlideIndex === slideItems.length - 1 ? (
                <Button
                    text="Finalizar"
                    onPress={() => navigation.goBack()}
                    styles={{ position: 'absolute', bottom: 60, right: 30, width: 100 }}
                />
            ) : (
                <Button
                    text="Siguiente"
                    styles={{ position: 'absolute', bottom: 60, right: 30, width: 100 }}
                    onPress={() => scrollToSlide(currentSlideIndex + 1)}
                />
            )}

        </View>
    )
}

interface SlideItemProps {
    item: Slide;
}

const SlideItem = ({ item }: SlideItemProps) => {
    const { colors } = useContext(ThemeContext);
    const { width } = useWindowDimensions();
    const { title, desc, img } = item;
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: colors.background,
                borderRadius: 5,
                padding: 40,
                justifyContent: 'center',
                width: width,
            }}>
            <Image
                source={img}
                style={{
                    width: width * 0.7,
                    height: width * 0.7,
                    resizeMode: 'center',
                    alignSelf: 'center',
                }}
            />
            <Text style={[globalStyles.title, { color: colors.primary }]}>{title}</Text>

            <Text
                style={{
                    color: colors.text,
                    marginTop: 20,
                }}>
                {desc}
            </Text>
        </View>
    )
}
export default SlidesScreen;
