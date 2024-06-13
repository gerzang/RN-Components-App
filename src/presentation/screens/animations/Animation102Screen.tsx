
import { useRef } from 'react';
import { Animated, PanResponder, StyleSheet, Text, View } from 'react-native';
import CustomView from '../../components/ui/CustomView';


const Animation102Screen = () => {

    const animatedXY = useRef(new Animated.ValueXY()).current;

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([
            null,
            {
                dx: animatedXY.x, // x,y are Animated.Value
                dy: animatedXY.y,
            },

        ], {
            useNativeDriver: false
        }),
        onPanResponderRelease: () => {
            Animated.spring(
                animatedXY, // Auto-multiplexed
                { toValue: { x: 0, y: 0 }, useNativeDriver: false }, // Back to zero
            ).start();
        },
    });

    return (
        <CustomView style={styles.container}>
            <Animated.View
                {...panResponder.panHandlers}
                style={[animatedXY.getLayout(), styles.box]}
            />
        </CustomView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        backgroundColor: '#61dafb',
        width: 80,
        height: 80,
        borderRadius: 4,
    },
});

export default Animation102Screen
