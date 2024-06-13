

import { RefreshControl, View } from 'react-native';
import Title from '../../components/ui/Title';
import { ScrollView } from 'react-native-gesture-handler';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useContext, useState } from 'react';
import { globalStyles } from '../../../config/theme/themes';
import { ThemeContext } from '../../context/ThemeContext';


const PullToRefreshScreen = () => {
    const { colors } = useContext(ThemeContext);


    const [isRefreshing, setIsRefreshing] = useState(false)
    const { top } = useSafeAreaInsets();
    const onRefresh = () => {
        setIsRefreshing(true);


        setTimeout(() => {
            setIsRefreshing(false);
        }, 3000);
    }


    return (
        <ScrollView
            refreshControl={
                <RefreshControl
                    refreshing={isRefreshing}
                    progressViewOffset={top}
                    colors={[colors.primary, 'red', 'orange', 'green']}
                    onRefresh={onRefresh}
                    tintColor={colors.primary}
                    progressBackgroundColor={colors.cardBackground}
                />
            }
            style={[globalStyles.mainContainer, globalStyles.globalMargin]}
        >
            <View>
                <Title text="Pull to refresh" safe />
            </View>
        </ScrollView>

    )
}

export default PullToRefreshScreen;
