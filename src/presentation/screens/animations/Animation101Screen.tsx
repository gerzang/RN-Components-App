
import { Animated, Easing, Pressable, StyleSheet, Text, View } from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';
import { useContext } from 'react';
import { colors } from '../../../config/theme/themes';
import { ThemeContext } from '../../context/ThemeContext';
import CustomView from '../../components/ui/CustomView';
import Button from '../../components/ui/Button';


const Animation101Screen = () => {
    const { colors } = useContext(ThemeContext);
    const { fadeIn, animatedOpacity, fadeOut, animatedTop, startMovingTopPosition } = useAnimation();

    return (
        <CustomView style={styles.container}>
            <Animated.View style={[
                styles.purpleBox,
                {
                    backgroundColor: colors.primary,
                },
                {
                    opacity: animatedOpacity,
                    transform: [{
                        translateY: animatedTop
                    }]
                }
            ]} />

            <Button
                text="FadeIn"
                onPress={() => {
                    fadeIn({});
                    startMovingTopPosition({
                        initialPosition: -100,
                        easing: Easing.elastic(1),
                        duration: 750
                    });

                }} styles={{ marginTop: 10 }}
            />

            <Button
                text="FadeOut"
                onPress={() => fadeOut({})}
                styles={{ marginTop: 10 }} />
        </CustomView>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
    purpleBox: {
        width: 150,
        height: 150,
    }
})
export default Animation101Screen;
