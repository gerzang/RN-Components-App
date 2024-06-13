
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import Separator from './Separator';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';

interface Props {
    name: string;
    icon: string;
    component: string;
    isFirst?: boolean;
    isLast?: boolean;
}


const MenuItem = ({ name, icon, component, isFirst = false, isLast = false }: Props) => {

    const navigation = useNavigation<any>();
    const { colors } = useContext(ThemeContext);

    return (
        <>
            <Pressable
                onPress={() => navigation.navigate(component)}
            >
                <View
                    style={{
                        ...styles.container,
                        backgroundColor: colors.cardBackground,
                        ...(isFirst && {
                            borderTopLeftRadius: 20,
                            borderTopRightRadius: 20,
                            paddingTop: 10
                        }),
                        ...(isLast && {
                            borderBottomLeftRadius: 20,
                            borderBottomRightRadius: 20,
                            paddingBottom: 10
                        })
                    }}
                >
                    <Icon
                        name={icon}
                        size={25}
                        style={{ marginRight: 10 }}
                        color={colors.primary}
                    />
                    <Text style={{ color: colors.text }}>{name}</Text>
                    <Icon
                        name={'chevron-forward-outline'}
                        size={25}
                        style={{ marginLeft: 'auto' }}
                        color={colors.primary}
                    />
                </View>

            </Pressable>
            {!isLast && <Separator />}
        </>

    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
})

export default MenuItem
